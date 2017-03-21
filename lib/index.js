const fs = require('fs');

const getTemplateFileAsString = function(templateFile) {
    return fs.readFileSync(__dirname.concat(templateFile)).toString();
};

const templatePresentational = function(name) {
    var thisTemplate = getTemplateFileAsString("/presentational-template.js");
    return thisTemplate.split('{name}').join(name);
};

const templateContainer = function(name) {
    var thisTemplate = getTemplateFileAsString("/container-template.js");
    return thisTemplate.split('{name}').join(name);
};

const templateContainerTests = function(name) {
    var thisTemplate = getTemplateFileAsString("/container-template-test.js");
    return thisTemplate.split('{name}').join(name);
};

const templatePresentationalTests = function(name) {
    var thisTemplate = getTemplateFileAsString("/presentational-template-test.js");
    return thisTemplate.split('{name}').join(name);
};

const templateReducer = function(name) {
    var thisTemplate = getTemplateFileAsString("/reducer-template.js");
    return thisTemplate.split('{name}').join(name);
};

const templateReducerTests = function(name) {
    var thisTemplate = getTemplateFileAsString("/reducer-template-test.js");
    return thisTemplate.split('{name}').join(name);
};

exports.templatePresentational = templatePresentational;
exports.templateContainer = templateContainer;
exports.templateContainerTests = templateContainerTests;
exports.templatePresentationalTests = templatePresentationalTests;
exports.templateReducer = templateReducer;
exports.templateReducerTests = templateReducerTests;