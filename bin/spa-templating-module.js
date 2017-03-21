#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const libs = require(path.join('../lib'));
const argv = require('yargs').argv;
const colors = require('colors');

if (argv.p) {
    try {
        const template = libs.templatePresentational(argv.p);
        const filename = argv.p.concat('.js');
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
    catch (err) {
        console.log(err.toString().red);
        return;
    }
}
else if (argv.c) {
    console.log(argv.c);
}