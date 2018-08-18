
'use strict';

const fs = require('fs');

console.log(__dirname);

const user         = fs.readFileSync(__dirname + '/queries/user.sql',         'utf8'),
      post         = fs.readFileSync(__dirname + '/queries/post.sql',         'utf8'),
      post_vote    = fs.readFileSync(__dirname + '/queries/post_vote.sql',    'utf8'),
      comment      = fs.readFileSync(__dirname + '/queries/comment.sql',      'utf8'),
      comment_vote = fs.readFileSync(__dirname + '/queries/comment_vote.sql', 'utf8'),
      org          = fs.readFileSync(__dirname + '/queries/org.sql',          'utf8'),
      channel      = fs.readFileSync(__dirname + '/queries/channel.sql',      'utf8'),
      tag          = fs.readFileSync(__dirname + '/queries/tag.sql',          'utf8'),
      color        = fs.readFileSync(__dirname + '/queries/color.sql',        'utf8'),
      state        = fs.readFileSync(__dirname + '/queries/state.sql',        'utf8'),
      status       = fs.readFileSync(__dirname + '/queries/status.sql',       'utf8');

module.exports = [
    {
        name: 'Color',
        query: color
    },
    {
        name: 'State',
        query: state
    },
    {
        name: 'Status',
        query: status
    },
    {
        name: 'Org',
        query: org
    },
    {
        name: 'User',
        query: user
    },
    {
        name: 'Channel',
        query: channel
    },
    {
        name: 'Tag',
        query: tag
    },
    {
        name: 'Post',
        query: post
    },
    {
        name: 'Post Vote',
        query: post_vote
    },
    {
        name: 'Comment',
        query: comment
    },
    {
        name: 'Comment Vote',
        query: comment_vote
    }
]
