'use strict';

const ds      = require('../ds'),
      slugify = require('../lib/slugify');

function Post(obj){
    if(!(
        obj.id
        && obj.title
        && obj.slug
        && obj.body
        && obj.author
        && obj.author_id
        && obj.author_uuid
        && obj.channel
        && obj.channel_id
        && obj.status
        && obj.status_id
        && obj.state
        && obj.state_id
        && obj.created
    )) return;

    this.id               = obj.id;
    this.title            = obj.title;
    this.slug             = obj.slug;
    this.body             = obj.body;

    const author = this.author = { };

    author.name = obj.author;
    author.id   = obj.author_id;
    author.uuid = obj.author_uuid;


    const channel = this.channel = { };

    channel.id        = obj.channel_id;
    channel.name      = obj.channel;
    channel.color     = obj.channel_color;
    channel.colorCode = obj.channel_color_code;
    channel.colorId = obj.channel_color_id;


    this.status           = obj.status;
    this.status_id        = obj.status_id;

    this.state            = obj.state;
    this.state_id         = obj.state_id;

    this.org              = obj.org;
    this.created          = obj.created;
    this.is_modified      = obj.is_modified;
    this.modified_by      = obj.modified_by;
    this.modified_by_id   = obj.modified_by_id;
    this.modified         = obj.modified;

    this.tags = obj.tags;

    return this;
}

Post.prototype.tag = async function tag(id){
    if(!id) return;

    try{
        const result = await ds.tagPost(this.id, id);

        return result;
    }
    catch(e){ return e }
}

Post.prototype.untag = async function untag(id){
    if(!id) return;

    try{
        const result = await ds.untagPost(this.id, id);

        return result;
    }
    catch(e){ return e }
}


async function all(){
    try{
        const posts = await ds.getAllPosts();

        return posts.map(post => new Post(post));
    }
    catch(e){ return e }
}

async function get(obj){
    if(obj.hasOwnProperty('id'))   return _getById(obj.id);
    if(obj.hasOwnProperty('slug')) return _getBySlug(obj.slug);
}

async function _getById(id){
    if(!id) return;

    try{
        const post = await ds.getPostById(id);

        if(post) return new Post(post);
    }
    catch(e){ return e }
}

async function _getBySlug(slug){
    if(!slug) return;

    try{
        const post = await ds.getPostBySlug(slug);

        if(post) return new Post(post);
    }
    catch(e){ return e }
}

async function byChannel(id){
    if(!id) return;

    try{
        const posts = await ds.getPostsByChannel(id);

        return posts.map(post => new Post(post));
    }
    catch(e){ return e }
}

async function byTag(id){
    if(!id) return;

    try{
        const posts = await ds.getPostsByTag(id);

        return posts.map(post => new Post(post));
    }
    catch(e){ return e }
}

async function add(obj){
    if(!(
        obj.title
        && obj.body
        && obj.author
        && obj.channel
    )) return

    const title   = obj.title,
          slug    = slugify(obj.title),
          body    = obj.body,
          author  = obj.author,
          channel = obj.channel;

    let post;
    try{
        post = await ds.addPost(title, slug, body, author, channel);
    }
    catch(e){ return e }

    try{
        post = await _getById(post.id);

        if(post) return new Post(post);
    }
    catch(e){ return e }
}

async function remove(id){
    if(!id) return;

    try{
        const deleted = await ds.deletePost(id);

        return deleted;
    }
    catch(e){ return e }
}


module.exports = {
    all,
    get,
    byChannel,
    byTag,
    add,
    remove
}
