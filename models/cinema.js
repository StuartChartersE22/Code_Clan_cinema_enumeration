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

Cinema.prototype.areAllFilmsOverRuntime = function (runtime) {
  return this.films.every(film => film.runtime > runtime);
};

Cinema.prototype.getTotalRuntime = function () {
  return this.films.reduce((total,film) => {
      return total + film.runtime;
  },0);
}

Cinema.prototype.filmsByProperty = function (properyName, value){
  return this.films.filter(film => film[properyName] === value );
}

module.exports = Cinema;
