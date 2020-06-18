variable "cloud_tags" {
  type    = list(string)
  default = []
}
variable "cluster_name" {
  type = string
}
variable "cluster_nodes_type" {
  type    = string
  default = "s-1vcpu-2gb"
}
variable "kube_version" {
  type    = string
  default = "1.17.5-do.0"
}
variable "region" {
  type    = string
  default = "fra1"
}
variable "environment" {
  type    = string
  default = "production"
}
