const spawn = require('cross-spawn');

/**
 * npm startコマンドを実行
 */
function npmInstall(dir) {
    return new Promise((resolve,reject) => {
        const res = spawn('npm',[
            'install'
        ],{
            cwd:dir,
            stdio: 'inherit'
        }).on('exit',() => {
            resolve(res);
        });
    });
}
module.exports = npmInstall;