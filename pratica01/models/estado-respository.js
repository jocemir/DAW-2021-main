const knex = require('../database');

module.exports = {
    
    find: () => {
        //select * from estado
        return knex.select('p.*', 'g.name as estado_nome').from('estado as p').innerJoin('estado as g', 'g.id', 'p.estado_id');
    },

    findById: (params) => {
        //select * from estado where id = params.id
        return knex.select('p.*', 'g.name as estado_nome').from('estado as p').innerJoin('estado as g', 'g.id', 'p.estado_id').where('p.id', params.id);
    }, 

    create: (params) => {
        //insert into estado(name, description, price, likes, estado_id) values (params.name, params.description, params.price, params.likes, price.estado_id)
        return knex.insert(params).into('estado');
    },

    update: (params) => {
        
        return knex('estado').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('estado').del().where('id', params.id);
    }
}