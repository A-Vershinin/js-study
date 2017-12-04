/*
  Запускать на сервере. Страница movies.html
 */
function customFunctionTask1 () {
  function customFunction () {

    let movieList = document.getElementsByClassName("movie")[0];
    let btnMovie = document.querySelector(".btn-movie");

    const key = "29f0c39fbc4a5564fb1626b66cd34d77";
    const url = "https://api.themoviedb.org/3/search/movie?api_key=";
    const baseSrc = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/";

    function addMovieToList (movie) {
      let img = document.createElement("img");
      img.src = `${baseSrc}${movie.poster_path}`;
      movieList.appendChild(img);
    }

    function getData (url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.addEventListener("load", () => {
          if (xhr.status == 200) {
            const json = JSON.parse(xhr.responseText);
            // console.log(json);
            resolve(json.results);
          } else {
            reject(xhr.statusText);
          }
        });
        xhr.addEventListener("error", (error) => {
          reject(error);
        });
        xhr.send();
      });
    }

    let search = "Пираты Карибского Моря";
    let man = getData(`${url}${key}&query=superman`);
    let betmen = getData(`${url}${key}&query=batman`);

    btnMovie.addEventListener("click", () => {
      // Одиночный запрос
      getData(`${url}${key}&query=${search}`)
        .then((movies) =>
          movies.forEach(movie =>
            addMovieToList(movie)))
        .catch(error => console.error(error));

      // несколько запросов
      man
        .then((movies) =>
          movies.forEach(movie =>
            addMovieToList(movie)))
        .catch(error => console.error(error));
      betmen
        .then((movies) =>
          movies.forEach(movie =>
            addMovieToList(movie)))
        .catch(error => console.error(error));
    });

// =====================================================
    function go (num) {
      return new Promise(function (resolve, reject) {
        let delay = Math.ceil(Math.random() * 3000);
        console.log(num, delay);
        setTimeout(() => {
          if (delay > 2000) {
            reject(num);
          } else {
            resolve(num);
          }
        }, delay);
      });
    }

// несколько промисов одновременно
    let p1 = go(1);
    let p2 = go(2);
    let p3 = go(3);
// результат в value будет массив результатов каждого промиса. Если хоть один
// reject - промис падает в кетч
// Promise.all([p1, p2, p3])
//   .then(value => console.log(value))
//   .catch((error) => console.error(error));

// При race какой первый промис завершится успешно, того результат и получим
// Promise.race([p1, p2, p3])
//   .then(value => console.log(value))
//   .catch((error) => console.error(error));
//
// Promise.race([p1, p2, p3])
//   .then(value => console.log(value))
//   .catch((error) => console.error(error));

// реальный пример
    Promise.race([man, betmen])
      .then((movies) =>
        movies.forEach(movie =>
          addMovieToList(movie)))
      .catch(error => console.error(error));

  }

  customFunction();
}

export default customFunctionTask1;

