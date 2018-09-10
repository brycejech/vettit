'use strict';

const ds      = require('../ds'),
      slugify = require('../lib/slugify');


function Tag(obj){
    if(!(
        obj.id
        && obj.name
        && obj.slug
        && obj.color_name
        && obj.color_code
        && obj.created
    )) return;

    this.id         = obj.id;
    this.name       = obj.name;
    this.slug       = obj.slug;
    this.color      = obj.color_name;
    this.colorCode  = obj.color_code;
    this.org        = obj.org;
    this.created    = obj.created;

    return this;
}


async function all(){
    try{
        const tags = await ds.getAllTags();

        return tags.map(tag => new Tag(tag));
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
        const tag = await ds.getTagById(id);

        if(tag) return new Tag(tag);
    }
    catch(e){ return e }
}

async function _getBySlug(slug){
    if(!slug) return;

    try{
        const tag = await ds.getTagBySlug(slug);

        if(tag) return new Tag(tag);
    }
    catch(e){ return e }
}

async function add(name, color){
    if(!(name && color)) return;

    const slug = slugify(name);
    let tag;
    try{
        tag = await ds.addTag(name, slug, color);
    }
    catch(e){ return e }

    try{
        tag = await _getById(tag.id);

        if(tag) return new Tag(tag);
    }
    catch(e){ return e }
}

async function remove(id){
    if(!id) return;

    try{
        const deleted = await ds.deleteTag(id);

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
