'use strict';
const assert = require('power-assert');
const fs = require('fs');
const rimraf = require('rimraf');
const cli = require('../lib/cli');
const greyhounds = require('../lib/greyhounds');
const install = require('../lib/install');

describe('greyhounds', function() {
    beforeEach(() => {
        // rimraf.sync('./test/files/dest');
    });
    afterEach(() => {
        // rimraf.sync('./test/files/dest');
    });
    it('init',() => {
        assert(cli);
        assert(greyhounds);
        assert(install);
    });
});