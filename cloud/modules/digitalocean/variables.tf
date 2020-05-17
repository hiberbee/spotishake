variable "project_name" {
  type = string
}
variable "region" {
  type = string
  default = "fra1"
}
variable "kube_version" {
  type = string
  default = "1.17.5-do.0"
}
variable "cloud_tags" {
  type = set(string)
  default = []
}
variable "cluster_nodes_type" {
  type = string
  default = "s-1vcpu-2gb"
}
variable "project_domain" {
  type = string
}
