/*
  Дана кнопка. По клику на кнопку сделайте AJAX запрос на сторонний API.
  Сделайте отдельно универсальную функцию для запроса. В цепочке промисов добавте
  результат на страницу
 */
function customFunctionTask1() {
  function customFunction() {

    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const btn = document.querySelector("#btn1");

    const cont = document.querySelector(".container");
    const list = document.querySelector(".list");
    const div = document.createElement("div");
    div.className = "ajax";
    cont.insertBefore(div, list);


    btn.addEventListener("click", () => {
      loadData(url)
        .then(response => {
          console.log("AJAX прошёл успешно");
          console.log(response);
          // можно самому вернуть любое значение из обработчика очереди
          // это значение попадёт в следующий then в качестве аргумента
          // если ничего не возвращаем значение в следующем then будет undefined
          return response;
        })
        .then(json => {
          div.innerText = json;
        })
    });

    function loadData(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.addEventListener("readystatechange", () => {
          if (xhr.readyState === xhr.DONE && xhr.status == 200) {
            resolve(xhr.responseText);
          } else {
            const error = new Error(this.statusText);
            error.code = this.status;
            reject(error);
          }
        });
        xhr.addEventListener("error", () => {
          reject(new Error("Network Error"));
        });
        xhr.send();
      });
    }


  }
  customFunction();
}

export default customFunctionTask1;

