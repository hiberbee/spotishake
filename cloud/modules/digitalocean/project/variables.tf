variable "project_id" {
  type = string
}
variable "project_resource_urns" {
  type    = set(string)
  default = []
}
