data "kubernetes_service" "loadbalancer" {
  metadata {
    name      = var.loadbalancer_name
    namespace = var.loadbalancer_namespace
  }
}

locals {
  domains = [
    "@",
    "*"
  ]
}

resource "digitalocean_record" "this" {
  count  = length(local.domains)
  domain = var.ingress_dns
  name   = local.domains[count.index]
  type   = "A"
  value  = lookup(data.kubernetes_service.loadbalancer.load_balancer_ingress[0], "ip")
}
