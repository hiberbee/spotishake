variable "domain_record" {
  type = object({
    domain = string
    name   = string
    type   = string
    value  = string
  })
}
variable "tag" {
  type    = string
  default = ""
}
