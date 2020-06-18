resource "digitalocean_record" "this" {
  domain = var.domain_record.domain
  name   = var.domain_record.name
  type   = var.domain_record.type
  value  = var.domain_record.value
  tag    = var.tag
}
