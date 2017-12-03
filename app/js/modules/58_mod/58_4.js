/*
  Пример цепочки вызовов на промисах:
  1. Загрузить данные посетителя с сервера (асинхронно).
  2. Затем отправить запрос о нём на github (асинхронно).
  3. Когда это будет готово, вывести его github-аватар на экран (асинхронно).
  4. …И сделать код расширяемым, чтобы цепочку можно было легко продолжить.

  При чейнинге, то есть последовательных вызовах .then…then…then, в каждый
  следующий then переходит результат от предыдущего.
 */
function customFunctionTask1 () {
  function customFunction () {

    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const btn = document.querySelector("#btn1");
    const cont = document.querySelector(".container");
    const list = document.querySelector(".list");

    btn.addEventListener("click", () => {
    // сделать запрос
    httpGet(url)
      // 1. Получить данные о пользователе в JSON и передать дальше
      .then(response => {
        console.log(response);
        let user = JSON.parse(response);
        return user;
      })

      // 2. Получить информацию с github
      .then(user => {
        console.log("Получили юзера от предыдущего thena");
        console.log(user);
        return httpGet(`https://api.github.com/users/${user.id}`);
      })

      // 3. Вывести аватар на 3 секунды (можно с анимацией)
      .then(githubUser => {
        console.log(githubUser);
        githubUser = JSON.parse(githubUser);

        let img = new Image();
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        cont.insertBefore(img, list);

        // чтобы цепочку продолжить возвращаем новый промис
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            img.remove();
            resolve();
          }, 4000);
        });
      })
      .catch(error => {
        alert(error); // Error: Not Found
      });
    });
    // httpGet(...)
    //   .then(...)
    //   .then(...)
    //   .then(...)



    function httpGet(url) {
      return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
          if (this.status == 200) {
            resolve(this.response);
          } else {
            let error = new Error(this.statusText);
            error.code = this.status;
            reject(error);
          }
        };
        xhr.onerror = function() {
          reject(new Error("Network Error"));
        };
        xhr.send();
      });
    }

  }

  customFunction();
}

export default customFunctionTask1;

