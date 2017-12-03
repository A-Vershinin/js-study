/*
  Несколько асинхронных процессов одновременно и обработать их результат
 */
function customFunctionTask1 () {
  function customFunction () {

    const btn = document.querySelector("#btn1");

    let urls = [
      '/article/promise/user.json',
      '/article/promise/guest.json'
    ];

    btn.addEventListener("click", () => {
      // Вызов Promise.all получает массив (или другой итерируемый объект)
      // промисов и возвращает промис, который ждёт, пока все переданные
      // промисы завершатся, и переходит в состояние «выполнено» с массивом
      // их результатов.
      Promise.all([
        httpGet('/article/promise/user.json'),
        httpGet('/article/promise/guest.json')
      ]).then(results => {
        console.log(results);
      });

      // Если какой-то из промисов завершился с ошибкой, то результатом
      // Promise.all будет эта ошибка. При этом остальные промисы игнорируются.
      Promise.all([
        httpGet('/article/promise/user.json'),
        httpGet('/article/promise/guest.json'),
        httpGet('/article/promise/no-such-page.json') // (нет такой страницы)
      ]).then(
        result => console.log("не сработает"),
        error => console.log("Ошибка: " + error.message) // Ошибка: Not Found
      )
    });




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

