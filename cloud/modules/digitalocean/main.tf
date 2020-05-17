terraform {
  required_version = "~> 0.12"
}

resource "digitalocean_project" "this" {
  name = var.project_name
}

resource "digitalocean_domain" "this" {
  name = var.project_domain
}

resource "digitalocean_project_resources" "this" {
  project = digitalocean_project.this.id
  resources = [
    digitalocean_domain.this.urn
  ]
}

resource "digitalocean_kubernetes_cluster" "this" {
  name = var.project_name
  region = var.region
  version = var.kube_version
  tags = var.cloud_tags
  node_pool {
    name = var.cluster_nodes_type
    size = var.cluster_nodes_type
    node_count = 2
  }
}
