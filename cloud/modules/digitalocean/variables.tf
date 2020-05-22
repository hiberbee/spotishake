variable "project_name" {
  type = string
}
variable "project_description" {
  type = string
}
variable "region" {
  type    = string
  default = "fra1"
}
variable "environment" {
  type    = string
  default = "production"
}
variable "kube_version" {
  type    = string
  default = "1.17.5-do.0"
}
variable "cloud_tags" {
  type    = set(string)
  default = []
}
variable "cluster_nodes_type" {
  type    = string
  default = "s-1vcpu-2gb"
}
variable "project_domain" {
  type = string
}
