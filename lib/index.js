const fs = require('fs');
const colors = require('colors');

const getTemplateFileAsString = function() {
    return fs.readFileSync(__dirname.concat("/presentational-template.js")).toString();
};

const templatePresentational = function(name) {
    var thisTemplate = getTemplateFileAsString();
    return thisTemplate.split('{name}').join(name);
};

exports.templatePresentational = templatePresentational;