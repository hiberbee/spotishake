resource "digitalocean_project_resources" "this" {
  project   = var.project_id
  resources = var.project_resource_urns
}
