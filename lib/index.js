const fs = require('fs');

const getTemplateFileAsString = function(templateFile) {
    return fs.readFileSync(__dirname.concat(templateFile)).toString();
};

const templatePresentational = function(name) {
    var thisTemplate = getTemplateFileAsString("/templates/presentational/template.tjs");
    return thisTemplate.split('{name}').join(name);
};

const templateContainer = function(name) {
    var thisTemplate = getTemplateFileAsString("/templates/container/template.tjs");
    return thisTemplate.split('{name}').join(name);
};

const templateContainerTests = function(name) {
    var thisTemplate = getTemplateFileAsString("/templates/container/test.tjs");
    return thisTemplate.split('{name}').join(name);
};

const templatePresentationalTests = function(name) {
    var thisTemplate = getTemplateFileAsString("/templates/presentational/test.tjs");
    return thisTemplate.split('{name}').join(name);
};

const templateReducer = function(name) {
    var thisTemplate = getTemplateFileAsString("/templates/reducer/template.tjs");
    return thisTemplate.split('{name}').join(name);
};

const templateReducerTests = function(name) {
    var thisTemplate = getTemplateFileAsString("/templates/reducer/test.tjs");
    return thisTemplate.split('{name}').join(name);
};

exports.templatePresentational = templatePresentational;
exports.templateContainer = templateContainer;
exports.templateContainerTests = templateContainerTests;
exports.templatePresentationalTests = templatePresentationalTests;
exports.templateReducer = templateReducer;
exports.templateReducerTests = templateReducerTests;