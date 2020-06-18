terraform {
  required_providers {
    kubernetes   = {
      source = "hashicorp/kubernetes"
    }
    local        = {
      source = "hashicorp/local"
    }
    digitalocean = {
      source = "terraform-providers/digitalocean"
    }
  }
  required_version = ">= 0.13"
}
