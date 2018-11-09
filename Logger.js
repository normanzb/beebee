var chalk = require('chalk');
var short = require('short-uuid');
var translator = short();

function getNow() {
    return (new Date()).toISOString();
}

class Logger {
    constructor(name) {
        this.id = name || translator.new();
    }

    error(...args) {
        args.unshift(getNow() + '/' + this.id + ':');
        console.error(chalk.red(args.join(' ')));
    }

    warn(...args) {
        args.unshift(getNow() + '/' + this.id + ':');
        console.warn(chalk.yellow(args.join(' ')));
    }

    log(...args) {
        args.unshift(getNow() + '/' + this.id + ':');
        console.log(chalk.green(args.join(' ')));
    }

    verbose(...args) {
        args.unshift(getNow() + '/' + this.id + ':');
        console.log.apply(console, args);
    }
}

module.exports = Logger;