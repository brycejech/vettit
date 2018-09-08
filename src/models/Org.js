'use strict';

const uuid    = require('uuid/v4'),
      slugify = require('../lib/slugify');

const ds = require('../ds');


function Org(obj){

    if(!(
           obj.id
        && obj.name
        && obj.slug
        && obj.uuid
        && obj.created
    )) return;

    this.id      = obj.id;
    this.name    = obj.name;
    this.slug    = obj.slug;
    this.uuid    = obj.uuid;
    this.created = obj.created;

    return this;
}

async function getAll(){
    return await ds.getAllOrgs();
}

async function get(obj){
    if(obj.hasOwnProperty('id'))   return _getById(obj.id);
    if(obj.hasOwnProperty('slug')) return _getBySlug(obj.slug);
    if(obj.hasOwnProperty('uuid')) return _getByUuid(obj.uuid);
}

async function _getById(id){
    if(!id) return;

    try{
        const result = await ds.getOrgById(id)
        if(result) return new Org(result);
    }
    catch(e){ return e }
}

async function _getBySlug(slug){
    if(!slug) return;

    try{
        const result = await ds.getOrgBySlug(slug);
        if(result) return new Org(result);
    }
    catch(e){ return e }

}

async function _getByUuid(uuid){
    if(!uuid) return;

    try{
        const result = await ds.getOrgByUuid(uuid);
        if(result) return new Org(result);
    }
    catch(e){ return e }
}

async function add(name){
    if(!name) return;

    const slug = slugify(name);

    try{
        const result = await ds.addOrg(name, slug, uuid());
        if(result) return new Org(result);
    }
    catch(e){ return e }
}


module.exports = {
    get,
    add
}
