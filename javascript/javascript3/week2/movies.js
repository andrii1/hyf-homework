//exercise 1
fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((res) => {
    //bad movies with rating < 5
    const badMovies = res.filter((element) => element.rating < 5);
    //bad movies since 2000
    const badMoviesSince2000 = badMovies.filter(
      (element) => element.year > 2000
    );
  });
