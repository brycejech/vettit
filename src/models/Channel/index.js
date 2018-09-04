'use strict';

const ds      = require('../../ds'),
      slugify = require('../../lib/slugify');

function Channel(obj){

    if(!(
           obj.id
        && obj.name
        && obj.slug
        && obj.color_name
        && obj.color_code
        && obj.created
    )){
        return;
    }

    this.id         = obj.id;
    this.name       = obj.name;
    this.slug       = obj.slug;
    this.color_name = obj.color_name;
    this.color_code = obj.color_code;
    this.org        = obj.org;
    this.created    = new Date(obj.created);

    return this;
}

async function all(){
    try{
        const channels = await ds.getAllChannels();
        return channels.map(channel => new Channel(channel));
    }
    catch(e){ return e }
}

async function get(obj){
    if(obj.hasOwnProperty('id'))   return await _getById(obj.id);
    if(obj.hasOwnProperty('slug')) return await _getBySlug(obj.slug);
}

async function _getById(id){
    if(!id) return;

    try{
        const channel = await ds.getChannelById(id);

        if(channel) return new Channel(channel);
    }
    catch(e){ return e }
}

async function _getBySlug(slug){
    if(!slug) return;

    try{
        const channel = await ds.getChannelBySlug(slug);

        if(channel) return new Channel(channel);
    }
    catch(e){ return e }
}

async function add(name, color){
    if(!(name && color)) return;

    const slug = slugify(name);
    let channel;
    try{
        channel = await ds.addChannel(name, slug, color);
    }
    catch(e){ return e}

    try{
        channel = await _getById(channel.id);

        if(channel) return new Channel(channel);
    }
    catch(e){ return e }
}

async function remove(id){
    if(!id) return;

    try{
        const deleted = await ds.deleteChannel(id);

        return deleted;
    }
    catch(e){ return e }
}


module.exports = {
    all,
    get,
    add,
    remove
}
