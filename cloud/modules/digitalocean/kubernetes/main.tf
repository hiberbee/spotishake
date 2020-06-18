resource "digitalocean_kubernetes_cluster" "this" {
  name    = lower(var.cluster_name)
  region  = var.region
  version = var.kube_version
  tags    = var.cloud_tags
  node_pool {
    name       = var.cluster_nodes_type
    size       = var.cluster_nodes_type
    node_count = 2
  }
}
