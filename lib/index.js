const fs = require('fs');

const { getTemplateFileAsString } = require('./helpers');

const namePlaceholder = '{name}';

const templatePresentational = function(name) {
    let thisTemplate = getTemplateFileAsString("/templates/presentational/template.tjs");
    return thisTemplate.split(namePlaceholder).join(name);
};

const templateContainer = function(name) {
    let thisTemplate = getTemplateFileAsString("/templates/container/template.tjs");
    return thisTemplate.split(namePlaceholder).join(name);
};

const templateContainerTests = function(name) {
    let thisTemplate = getTemplateFileAsString("/templates/container/test.tjs");
    return thisTemplate.split(namePlaceholder).join(name);
};

const templatePresentationalTests = function(name) {
    let thisTemplate = getTemplateFileAsString("/templates/presentational/test.tjs");
    return thisTemplate.split(namePlaceholder).join(name);
};

const templateReducer = function(name) {
    let thisTemplate = getTemplateFileAsString("/templates/reducer/template.tjs");
    return thisTemplate.split(namePlaceholder).join(name);
};

const templateReducerTests = function(name) {
    let thisTemplate = getTemplateFileAsString("/templates/reducer/test.tjs");
    return thisTemplate.split(namePlaceholder).join(name);
};

exports.templatePresentational = templatePresentational;
exports.templateContainer = templateContainer;
exports.templateContainerTests = templateContainerTests;
exports.templatePresentationalTests = templatePresentationalTests;
exports.templateReducer = templateReducer;
exports.templateReducerTests = templateReducerTests;