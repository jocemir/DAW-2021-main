const knex = require('../database');

module.exports = {
    
    find: () => {
        //select * from estado
        return knex.select('p.*', 'g.name as group_name').from('estado as p').innerJoin('group as g', 'g.id', 'p.group_id');
    },

    findById: (params) => {
        //select * from estado where id = params.id
        return knex.select('p.*', 'g.name as group_name').from('estado as p').innerJoin('group as g', 'g.id', 'p.group_id').where('p.id', params.id);
    }, 

    create: (params) => {
        //insert into estado(name, description, price, likes, group_id) values (params.name, params.description, params.price, params.likes, price.group_id)
        return knex.insert(params).into('estado');
    },

    update: (params) => {
        
        return knex('estado').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('estado').del().where('id', params.id);
    }
}