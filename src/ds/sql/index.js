'use strict';

const fs = require('fs');

const queries = [
    // Users
    {
        name:   'registerUser',
        script: 'register-user.sql'
    },
    {
        name:   'usernameExists',
        script: 'username-exists.sql'
    },
    {
        name:   'emailExists',
        script: 'email-exists.sql'
    },
    {
        name:   'getUserByEmail',
        script: 'get-user-by-email.sql'
    },
    {
        name:   'getUserByUsername',
        script: 'get-user-by-username.sql'
    },
    {
        name:   'getUserByUuid',
        script: 'get-user-by-uuid.sql'
    },

    // Colors
    {
        name:   'getAllColors',
        script: 'get-all-colors.sql'
    },
    {
        name:   'getColor',
        script: 'get-color.sql'
    },
    {
        name:   'addColor',
        script: 'add-color.sql'
    },
    {
        name:   'deleteColor',
        script: 'delete-color.sql'
    },

    // States
    {
        name:   'getAllStates',
        script: 'get-all-states.sql'
    },
    {
        name:   'getState',
        script: 'get-state.sql'
    },

    // Statuses
    {
        name:   'getAllStatuses',
        script: 'get-all-statuses.sql'
    },
    {
        name:   'getStatus',
        script: 'get-status.sql'
    },
    {
        name:   'addStatus',
        script: 'add-status.sql'
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
