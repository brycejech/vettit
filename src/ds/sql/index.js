'use strict';

const fs = require('fs');

const queries = [
    // Users
    {
        name:   'registerUser',
        script: 'account-add.sql'
    },
    {
        name:   'usernameExists',
        script: 'account-exists-username.sql'
    },
    {
        name:   'emailExists',
        script: 'account-exists-email.sql'
    },
    {
        name:   'getUserByEmail',
        script: 'account-get-by-email.sql'
    },
    {
        name:   'getUserByUsername',
        script: 'account-get-by-username.sql'
    },
    {
        name:   'getUserByUuid',
        script: 'account-get-by-uuid.sql'
    },

    // Colors
    {
        name:   'getAllColors',
        script: 'color-get-all.sql'
    },
    {
        name:   'getColor',
        script: 'color-get.sql'
    },
    {
        name:   'addColor',
        script: 'color-add.sql'
    },
    {
        name:   'deleteColor',
        script: 'color-delete.sql'
    },

    // States
    {
        name:   'getAllStates',
        script: 'state-get-all.sql'
    },
    {
        name:   'getState',
        script: 'state-get.sql'
    },

    // Statuses
    {
        name:   'getAllStatuses',
        script: 'status-get-all.sql'
    },
    {
        name:   'getStatus',
        script: 'status-get.sql'
    },
    {
        name:   'addStatus',
        script: 'status-add.sql'
    }
]

module.exports = {};

queries.forEach(query => {
    try{
        module.exports[query.name] = fs.readFileSync(`${ __dirname }/queries/${ query.script }`, 'utf8');
    }
    catch(e){
        console.log(`Failed to load query "${ query.name }"`);
    }
});
