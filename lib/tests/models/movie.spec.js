'use strict'

const Movie = require('../../src/models/movie')
const db = require('../../src/services/database')
const expect = require('chai').expect

describe('Movie module', () => {
  describe('"up"', () => {
    // it('should export a function', () => {
    //   expect(Movie.up).to.be.a('function')
    // })
    // it('should create a table named "movie"', () => {
    //   return Movie.up()
    //     .then(() => db.schema.hasTable('movie'))
    //     .then((hasMovieTable) => expect(hasMovieTable).to.be.true)
    // })

    it('should create a table named "movie"', function * () {
      yield Movie.up()
      const hasMovieTable = yield db.schema.hasTable('movie')
    
      expect(hasMovieTable).to.be.true
    })
  })
})
