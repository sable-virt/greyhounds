# greyhounds

Generate template from github & execute `npm install` command

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZHMSywFQDJM" frameborder="0" allowfullscreen></iframe>

## Command

```
ghs <APP_NAME>
ghs <APP_NAME> --preset wp
ghs <APP_NAME> --preset frontplate
ghs <APP_NAME> --github frontainer/greyhounds
```

## Options

- --preset, -p : Download from preset templates ('default' or 'frontplate')
- --github, -g : Download from github (USER_NAME/REPO_NAME)
- --version,-v : show version
- --help,   -h : show help

## Preset

- default: [frontainer/default-greyhounds](https://github.com/frontainer/default-greyhounds)
- wp: [frontainer/wp-greyhounds](https://github.com/frontainer/wp-greyhounds)
- frontplate: [frontainer/frontplate](https://github.com/frontainer/frontplate)