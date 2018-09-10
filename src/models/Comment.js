'use strict';

const ds = require('../ds');

function Comment(obj){
    if(!(
           obj.id
        && obj.author_id
        && obj.body
        && obj.post_id
        && obj.created
    )) return;

    this.id         = obj.id;
    this.body       = obj.body;
    this.postId     = obj.post_id;
    this.created    = obj.created;
    this.modfied    = obj.modified;
    this.modifiedBy = obj.modified_by;

    const author = this.author = { };
    author.id    = obj.author_id;
    author.uuid  = obj.author_uuid;
    author.name  = obj.author;

    this.replies    = obj.replies.map(reply => new Reply(reply));

    return this;
}

function Reply(obj){
    if(!(
           obj.id
        && obj.body
        && obj.comment_id
        && obj.created
        && obj.author_id
    )) return;

    this.id        = obj.id;
    this.commentId = obj.comment_id;
    this.body      = obj.body;
    this.created   = obj.created;

    const author = this.author = { };
    author.id    = obj.author_id;
    author.uuid  = obj.author_uuid;
    author.name  = obj.author;
}


async function get(obj){
    if(obj.hasOwnProperty('id')) return _getById(obj.id);
}

async function _getById(id){
    if(!id) return;

    try{
        const comment = await ds.getCommentById(id);

        if(comment) return new Comment(comment);
    }
    catch(e){ return e }
}

async function byPost(id){
    if(!id) return [];

    try{
        const comments = await ds.getCommentsByPost(id);

        if(comments) return comments.map(comment => new Comment(comment));
    }
    catch(e){ return e }
}

async function add(body, author, postId){
    if(!(
           body
        && author
        && postId
    )) return;

    let comment;
    try{
        comment = await ds.addComment(body, author, postId);
    }
    catch(e){ return e }

    try{
        comment = await _getById(comment.id);

        if(comment) return comment;
    }
    catch(e){ return e }
}

async function remove(id){
    if(!id) return;

    try{
        const removed = await ds.deleteComment(id);

        return removed;
    }
    catch(e){ return false }
}

module.exports = {
    get,
    byPost,
    add,
    remove
}
