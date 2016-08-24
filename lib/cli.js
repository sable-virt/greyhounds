'use strict';
/**
 * cli.js
 */
const meow = require('meow');
module.exports = meow(`
    Usage
      $ ghs <APP_NAME> [options]
    Commands
      $ ghs <APP_NAME> --preset PRESET_NAME
      $ ghs <APP_NAME> --github USER_NAME/REPO_NAME
      $ ghs <APP_NAME> --version
      $ ghs <APP_NAME>--help
    Options
      -p, --preset
      -g, --github
      -v, --version version
      -h, --help help
    Examples
      $ ghs sample --preset default
      $ ghs sample --preset frontplate
      $ ghs sample --preset wp
      $ ghs sample --github frontainer/frontplate
`, {
    alias: {
        ghs: 'greyhounds',
        p: 'preset',
        g: 'github',
        v: 'version',
        h: 'help'
    },
    default: {
        preset: 'default'
    },
    boolean: []
});