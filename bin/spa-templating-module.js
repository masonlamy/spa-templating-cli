#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const libs = require(path.join('../lib'));
const argv = require('yargs').argv;
const colors = require('colors');

let filename;
let template;

let templateTests;
let filenameTests;

if (argv._ && argv._.indexOf('ng') !== -1) {
    console.log('welcome to the angular world....');
    const { handleAngularTemplating } = require('../lib/templates/angular/angular');
    handleAngularTemplating();
    return;
}

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
else if (argv.r) {
    try {
        template = libs.templateReducer(argv.r);
        templateTests = libs.templateReducerTests(argv.r);
        filename = argv.r.toLowerCase().concat('Reducer').concat('.js');
        filenameTests = argv.r.toLowerCase().concat('Reducer.test.js');
    }
    catch (err) {
        console.log(err.toString().red);
        return;
    }
}
else {
    console.log('');
    console.log('Usage: spa <command>');
    console.log('');
    console.log('');
    console.log('Where <command> can be:');
    console.log('-p [name] : scaffold presentational component [name].js and test file [name].test.js');
    console.log('-c [name] : scaffold container component [name]Container.js and test file [name]Container.test.js');
    console.log('-r [name] : scaffold reducer [name]Reducer.js and test file [name]Reducer.test.js');
    console.log('');
    console.log('');
    console.log('Optional argument -t to only create the test file');
    console.log('');
    console.log('');
    return;
}

if (!argv.t) {
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
}

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