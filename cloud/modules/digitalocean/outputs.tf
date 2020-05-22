output "cluster_config" {
  value     = digitalocean_kubernetes_cluster.this.kube_config[0].raw_config
  sensitive = true
}
output "cluster_ca_certificate" {
  value     = digitalocean_kubernetes_cluster.this.kube_config[0].cluster_ca_certificate
  sensitive = true
}
output "cluster_token" {
  value     = digitalocean_kubernetes_cluster.this.kube_config[0].token
  sensitive = true
}
output "cluster_host" {
  value = digitalocean_kubernetes_cluster.this.endpoint
}
