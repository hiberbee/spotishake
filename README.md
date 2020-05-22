# SpotiShake

<p align="center">
    <a href="https://sonarcloud.io/dashboard?id=Hiberbee_spotishake" target="_blank"><img src="https://sonarcloud.io/api/project_badges/measure?project=Hiberbee_spotishake&metric=code_smells"></a>
    <a href="https://github.com/badges/shields/graphs/contributors" target="_blank"><img src="https://github.com/Hiberbee/spotishake/workflows/.github/workflows/docker.yml/badge.svg" /></a>
    <a href="https://github.com/badges/shields/graphs/contributors" target="_blank"><img src="https://github.com/Hiberbee/spotishake/workflows/.github/workflows/kubernetes.yml/badge.svg" /></a>
    <a href="https://github.com/badges/shields/graphs/contributors" target="_blank"><img src="https://github.com/Hiberbee/spotishake/workflows/.github/workflows/terraform.yml/badge.svg" /></a> 
</p>

Spotify playlist manager with random shuffling, duplicate tracking and revision history.

## Web

See [documentation](./web/README.md)

## API

See [documentation](./api/README.md)

### Cloud Infrastructure


See [documentation](./cloud/README.md)

## Local Environment

1. Install dependencies for your host system.

#### MacOS

Assuming, you have Mac with [Brew](https://brew.sh) installed, execute in your command line from project dir:

```bash
brew bundle
```

#### Windows

In case of Windows, with [Chocolatey](https://chocolatey.org) installed, execute in your command line from project dir:

```powershell
chocolatey install Packages.config
```

2. Create Kubernetes local cluster

```console
minikube start
```

3. Build and deploy applications with Skaffold

```bash
skaffold run --port-forward=true
```

4. Verify you can access web on [http://localhost:80](http://localhost:80) - you should see successful info, something like

```
- deployment/spotishake-web is ready.
- deployment/spotishake-api is ready.

Deployments stabilized in 9.4093799s

Port forwarding service/spotishake-api in namespace default, remote port 80 -> address 127.0.0.1 port 80
Port forwarding service/spotishake-web in namespace default, remote port 80 -> address 127.0.0.1 port 81
```


