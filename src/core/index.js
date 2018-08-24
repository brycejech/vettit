'use strict';

// Data Store
const ds = require('../ds');

const core = {};

const modules = [
    {
        name: 'users',
        path: './users'
    }
];


modules.forEach(module => {
    core[module.name] = require(module.path);
});

module.exports = core;
