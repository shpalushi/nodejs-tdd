'use strict'

const db = require('../services/database')

const tableName = 'movie'

function up () {
  return db.schema.createTableIfNotExists(tableName, (table) => {
    table.increments()
    table.string('name')
    table.timestamps()
  })
}

module.exports = {
  up
}