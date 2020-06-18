variable "digitalocean_api_token" {
  type        = string
  description = "Create DigitalOcean token here: https://cloud.digitalocean.com/account/api/tokens"
}

locals {
  name           = "SpotiShake"
  description    = "Spotify playlist manager with random shuffling, duplicate tracking and revision history."
  environment    = "staging"
  domain         = "spotishake.me"
  cluster_region = "fra1"
  tags           = [
    "env:${local.environment}",
    "provisioner:terraform"
  ]
}

provider "digitalocean" {
  token = var.digitalocean_api_token
}

resource "digitalocean_domain" "this" {
  name = local.domain
}

module "domain" {
  count         = length(local.domain_records)
  source        = "./modules/digitalocean/domain"
  domain_record = local.domain_records[count.index]
  tag           = "env:${local.environment}"
}

module "kubernetes_provisioner" {
  source       = "./modules/digitalocean/kubernetes"
  cluster_name = local.name
  region       = local.cluster_region
  cloud_tags   = local.tags
}

resource "local_file" "kubeconfig" {
  filename             = ".kube/config"
  content              = module.kubernetes_provisioner.cluster_config
  directory_permission = "0640"
  file_permission      = "0640"
}

provider "kubernetes" {
  load_config_file       = false
  host                   = module.kubernetes_provisioner.cluster_host
  token                  = module.kubernetes_provisioner.cluster_token
  cluster_ca_certificate = base64decode(module.kubernetes_provisioner.cluster_ca_certificate)
}

locals {
  domain_records = []
}

resource "digitalocean_project" "this" {
  name        = local.name
  description = local.description
  environment = local.environment
}

module "project" {
  source                = "./modules/digitalocean/project"
  project_id            = digitalocean_project.this.id
  project_resource_urns = [
    digitalocean_domain.this.urn,
  ]
}
