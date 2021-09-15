const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'mysql.ideagestor.com.br',
        user: 'ideagestor09',
        password: 'senha12345',
        database: 'ideagestor09'
    }
});

module.exports = knex;