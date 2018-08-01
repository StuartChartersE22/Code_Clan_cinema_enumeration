const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  return this.films.map(film => film.title);
};

Cinema.prototype.findFilmByTitle = function (title) {
  return this.films.find(film => film.title === title);
};

Cinema.prototype.findFilmsByGenre = function (genre) {
  return this.films.filter(film => film.genre === genre);
};

Cinema.prototype.hasFilmsByYear = function (year) {
  return this.films.some(film => film.year === year);
};

module.exports = Cinema;
