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
        name:   'getUserById',
        script: 'account-get-by-id.sql'
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
    },

    // Tags
    {
        name:   'getAllTags',
        script: 'tag-get-all.sql'
    },
    {
        name:   'getTagById',
        script: 'tag-get-by-id.sql'
    },
    {
        name:   'getTagBySlug',
        script: 'tag-get-by-slug.sql'
    },
    {
        name:   'addTag',
        script: 'tag-add.sql'
    },
    {
        name:   'deleteTag',
        script: 'tag-delete.sql'
    },

    // Post Tags
    {
        name:   'postTagAdd',
        script: 'post-tag-add.sql'
    },
    {
        name:   'postTagDelete',
        script: 'post-tag-delete.sql'
    },

    // Channels
    {
        name:   'getAllChannels',
        script: 'channel-get-all.sql'
    },
    {
        name:   'getChannelById',
        script: 'channel-get-by-id.sql'
    },
    {
        name:   'getChannelBySlug',
        script: 'channel-get-by-slug.sql'
    },
    {
        name:   'addChannel',
        script: 'channel-add.sql'
    },
    {
        name:   'deleteChannel',
        script: 'channel-delete.sql'
    },

    // Orgs
    {
        name:   'getAllOrgs',
        script: 'org-get-all.sql'
    },
    {
        name:   'getOrgById',
        script: 'org-get-by-id.sql'
    },
    {
        name:   'getOrgBySlug',
        script: 'org-get-by-slug.sql'
    },
    {
        name:   'getOrgByUuid',
        script: 'org-get-by-uuid.sql'
    },
    {
        name:   'addOrg',
        script: 'org-add.sql'
    },
    {
        name:   'deleteOrg',
        script: 'org-delete.sql'
    }
];

module.exports = {};

queries.forEach(query => {
    try{
        module.exports[query.name] = fs.readFileSync(`${ __dirname }/queries/${ query.script }`, 'utf8');
    }
    catch(e){
        console.log(`Failed to load query "${ query.name }"`);
    }
});
