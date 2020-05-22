variable "digitalocean_api_token" {
  type        = string
  description = "Create DigitalOcean token here: https://cloud.digitalocean.com/account/api/tokens"
}

terraform {
  required_version = ">= 0.12.20"
  backend "remote" {
    organization = "Hiberbee"
    workspaces {
      name = "spotishake"
    }
  }
}

locals {
  name           = "SpotiShake"
  description    = "Spotify playlist manager with random shuffling, duplicate tracking and revision history."
  domain         = "spotishake.me"
  cluster_region = "fra1"
  tags           = [
    "staging",
    "production"
  ]
}

provider "digitalocean" {
  token = var.digitalocean_api_token
}

module "kubernetes_provisioner" {
  source              = "./modules/digitalocean"
  project_name        = local.name
  region              = local.cluster_region
  project_description = local.description
  project_domain      = local.domain
  cloud_tags          = local.tags
}

resource "local_file" "kubeconfig" {
  filename = ".kube/config"
  content  = module.kubernetes_provisioner.cluster_config
}

provider "kubernetes" {
  load_config_file       = false
  host                   = module.kubernetes_provisioner.cluster_host
  token                  = module.kubernetes_provisioner.cluster_token
  cluster_ca_certificate = base64decode(module.kubernetes_provisioner.cluster_ca_certificate)
}

module "ingress_dns" {
  source      = "./modules/ingress_dns"
  ingress_dns = local.domain
}
