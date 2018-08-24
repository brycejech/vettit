'use strict';

const fs = require('fs');

const queries = [
    {
        name:   'registerUser',
        script: 'register-user.sql'
    },
    {
        name: 'usernameExists',
        script: 'username-exists.sql'
    },
    {
        name: 'emailExists',
        script: 'email-exists.sql'
    },
    {
        name: 'getUserByEmail',
        script: 'get-user-by-email.sql'
    },
    {
        name: 'getUserByUsername',
        script: 'get-user-by-username.sql'
    },
    {
        name: 'getUserByUuid',
        script: 'get-user-by-uuid.sql'
    }
]

module.exports = {};

queries.forEach(query => {
    module.exports[query.name] = fs.readFileSync(`${ __dirname }/queries/${ query.script }`, 'utf8');
});
