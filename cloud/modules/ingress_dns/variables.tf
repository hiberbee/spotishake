variable "loadbalancer_name" {
  type    = string
  default = "nginx-ingress-controller"
}
variable "loadbalancer_namespace" {
  type    = string
  default = "kube-system"
}
variable "ingress_dns" {
  type = string
}
