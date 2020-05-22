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
  kubeconfig     = ".kube/config"
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
  filename = local.kubeconfig
  content  = module.kubernetes_provisioner.cluster_config
}

provider "kubernetes" {
  config_context = "do-${local.cluster_region}-${lower(local.name)}"
  config_path    = "${path.cwd}/${local_file.kubeconfig.filename}"
}

module "ingress_dns" {
  source      = "./modules/ingress_dns"
  ingress_dns = local.domain
}
