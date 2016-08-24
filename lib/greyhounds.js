'use strict';

const path = require('path');
const download = require('download-github-repo');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const Spinner = require('cli-spinner').Spinner;
const SPINNER_TYPE = 18;
const install = require('./install');
const PRESET = {
    'default': 'frontainer/default-greyhounds',
    'wp': 'frontainer/wp-greyhounds',
    'frontplate': 'frontainer/frontplate'
};
/**
 * GreyHounds
 */
class GreyHounds {
    constructor(appName,options = {}) {
        if (!appName) {
            console.error(chalk.red(`Required APP_NAME.`));
            process.exit(1);
        }
        this.appName = appName;
        this.options = options;
        this.start();
    }
    start() {
        let src = PRESET.default;
        if (this.options) {
            if (this.options.github) {
                src = this.options.github;
            } else if (this.options.preset) {
                if (PRESET[this.options.preset]) {
                    src = PRESET[this.options.preset];
                } else {
                    return console.error(chalk.red(`Not found preset "${this.options.preset}"`));
                    process.exit(1);
                }
            }
        }
        const destPath = path.join(process.cwd(),this.appName);

        mkdirp.sync(destPath);
        console.log(chalk.green(`[create] ${destPath}`));

        getFiles(src,destPath)
            .then(() => {
                return npmInstall(destPath);
            })
            .then(() => {
                if (src === PRESET.wp) {
                    return getFiles('Wordpress/Wordpress', path.join(destPath, 'wp'));
                } else {
                    return Promise.resolve();
                }
            })
            .then(() => {
                console.log(chalk.green(`All Done!!`));
            })
            .catch((e) => {
                console.error(chalk.red(e));
                throw new Error('get files error');
            });
    }
}

function getFiles(src,destPath) {
    return new Promise((resolve,reject) => {
        console.log(chalk.blue(`[target] ${src}`));

        const downloadSpin = new Spinner('Download... %s');
        downloadSpin.setSpinnerString(SPINNER_TYPE);
        downloadSpin.start();

        download(src,destPath,(e) => {
            downloadSpin.stop();
            if (e) {
                return reject(e);
            }
            resolve();
        });
    });
}
function npmInstall(path) {
    return new Promise((resolve,reject) => {
        const installSpin = new Spinner('Install... %s');
        installSpin.setSpinnerString(SPINNER_TYPE);
        installSpin.start();
        install(path).then((res) => {
            installSpin.stop();
            resolve(res);
        }, (e) => {
            installSpin.stop();
            reject(e);
        });
    });
}

module.exports = function(command,options) {
    return new GreyHounds(command,options);
};