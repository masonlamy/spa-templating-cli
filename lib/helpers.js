const fs = require('fs');

module.exports.getTemplateFileAsString = (templateFile) => {
    return fs.readFileSync(__dirname.concat(templateFile)).toString();
};