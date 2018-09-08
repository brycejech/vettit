'use strict';

const models = Object.create(null);

[
    'Channel',
    'Color',
    'Org',
    'Post',
    'State',
    'Status',
    'Tag',
    'User'
].forEach(model => {
    models[model] = require(`${ __dirname }/${ model }`);
})

module.exports = models;
