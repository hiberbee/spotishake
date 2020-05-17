variable "digitalocean_api_token" {
  type = string
  description = "Create DigitalOcean token here: https://cloud.digitalocean.com/account/api/tokens"
}

locals {
  name = "spotishake"
  domain = "spotishake.me"
  tags = [
    "staging",
    "production"
  ]
}

provider "digitalocean" {
  token = var.digitalocean_api_token
}

module "kubernetes_provisioner" {
  source = "./modules/digitalocean"
  project_name = local.name
  project_domain = local.domain
  cloud_tags = local.tags
}

resource "local_file" "kubeconfig" {
  filename = ".kube/config"
  content = module.kubernetes_provisioner.cluster_config
}
