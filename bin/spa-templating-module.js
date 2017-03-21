#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const libs = require(path.join('../lib'));
const argv = require('yargs').argv;
const colors = require('colors');

var filename;
var template;

var templateTests;
var filenameTests;

if (argv.p) {
    try {
        template = libs.templatePresentational(argv.p);
        templateTests = libs.templatePresentationalTests(argv.p);
        filename = argv.p.concat('.js');
        filenameTests = argv.p.concat('.test.js');
    }
    catch (err) {
        console.log(err.toString().red);
        return;
    }
}
else if (argv.c) {
    try {
        template = libs.templateContainer(argv.c);
        templateTests = libs.templateContainerTests(argv.c);
        filename = argv.c.concat('Container').concat('.js');
        filenameTests = argv.c.concat('Container.test.js');
    }
    catch (err) {
        console.log(err.toString().red);
        return;
    }
}
else {
    return;
}

console.log('Creating file '.concat(filename).concat('...'));

fs.open(filename, 'r', function(err, fd) {
    if (err) {
        fs.writeFile(filename, template, function(err){
            if (err) {
                console.error(err.toString().red);
            }
            else {
                console.log('Successful'.green);
            }
        });
    }
    else {
        console.error('File already exists!'.red);
    }
});

console.log('Creating file '.concat(filenameTests).concat('...'));

fs.open(filename, 'r', function(err, fd) {
    if (err) {
        fs.writeFile(filenameTests, templateTests, function(err){
            if (err) {
                console.error(err.toString().red);
            }
            else {
                console.log('Successful'.green);
            }
        });
    }
    else {
        console.error('File already exists!'.red);
    }
});