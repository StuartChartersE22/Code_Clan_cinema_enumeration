const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function () {
    const results = cinema.getFilmTitles();
    assert.deepStrictEqual(results, [`Moonlight`, 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting']);
  });
  it('should be able to find a film by title', function () {
    const result = cinema.findFilmByTitle('Dunkirk');
    assert.deepStrictEqual(result, dunkirk);
  });
  it('should be able to filter films by genre', function () {
    const results = cinema.findFilmsByGenre(`drama`);
    assert.deepStrictEqual(results, [moonlight, trainspotting]);
  });
  it('should be able to check whether there are some films from a particular year', function () {
    const result = cinema.hasFilmsByYear(2017);
    assert.strictEqual(result, true);
  });
  it('should be able to check whether there are no films from a particular year', function () {
    const result = cinema.hasFilmsByYear(2000);
    assert.strictEqual(result, false);
  });
  it('should be able to check whether all films are over a particular length', function () {
    const result = cinema.areAllFilmsOverRuntime(80);
    assert.strictEqual(result, true);
  });
  it('should be able to calculate total running time of all films', function () {
    const result = cinema.getTotalRuntime();
    assert.strictEqual(result, 622);
  });

  it('should be able to filter a film by year', function(){
    const result = cinema.filmsByProperty('year', 2018);
    assert.deepStrictEqual(result,[blackPanther]);

  });

});

module.exports = Cinema;
