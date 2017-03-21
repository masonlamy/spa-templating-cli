#!/usr/bin/env node

const path = require('path');
const libs = require(path.join('../lib'));
const argv = require('yargs').argv;

console.log('executing in directory: '.concat(process.cwd()));

if (argv.p) {
    console.log(argv.p);
}
else if (argv.c) {
    console.log(argv.c);
}