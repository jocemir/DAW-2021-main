const knex = require('../database');

module.exports = {
    
    find: () => {
        //select * from cidade
        return knex.select('p.*', 'g.name as group_name').from('cidade as p').innerJoin('group as g', 'g.id', 'p.group_id');
    },

    findById: (params) => {
        //select * from cidade where id = params.id
        return knex.select('p.*', 'g.name as group_name').from('cidade as p').innerJoin('group as g', 'g.id', 'p.group_id').where('p.id', params.id);
    }, 

    create: (params) => {
        //insert into cidade(name, description, price, likes, group_id) values (params.name, params.description, params.price, params.likes, price.group_id)
        return knex.insert(params).into('cidade');
    },

    update: (params) => {
        
        return knex('cidade').update(params).where('id', params.id);
    },

    delete: (params) => {
        return knex('cidade').del().where('id', params.id);
    }
}