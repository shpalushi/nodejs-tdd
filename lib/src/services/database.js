'use strict'

const createKnex = require('knex')

const knex = createKnex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : 'DBAAdmin12#',
    database : 'movie_tdd_app'
  }
})

module.exports = knex