## Requirements

| Name | Version |
|------|---------|
| terraform | ~> 0.12 |

## Providers

| Name | Version |
|------|---------|
| digitalocean | n/a |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| cluster\_nodes\_type | n/a | `string` | `"s-1vcpu-2gb"` | no |
| kube\_version | n/a | `string` | `"1.17.5-do.0"` | no |
| project\_domain | n/a | `string` | n/a | yes |
| project\_name | n/a | `string` | n/a | yes |
| region | n/a | `string` | `"fra1"` | no |
| tags | n/a | `set(string)` | `[]` | no |

## Outputs

| Name | Description |
|------|-------------|
| cluster\_config | n/a |

