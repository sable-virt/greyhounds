#!/usr/bin/env node
/**
 * cli.js
 */

const pkg = require('../package.json');
const updateNotifier = require('update-notifier');
updateNotifier({pkg}).notify();

const greyhounds = require('../lib/greyhounds');
const cli = require('../lib/cli');
greyhounds(cli.input[0], cli.flags);