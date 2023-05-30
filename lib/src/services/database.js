'use strict'

const createKnex = require('knex')

const knex = createKnex({
  client: 'pg',
  connection: {
    host : 'HOST',
    port : 5432, //port
    user : 'postgres', //user
    password : 'PASSWORD', //password for the user
    database : 'movie_tdd_app' // database name
  }
})

module.exports = knex