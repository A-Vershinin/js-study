/*
  Разметка в ajaxPage.html
  файлы урока перенести на опенсервер и тестировать players.json, mail.php
  Ajax нативно и FormData. Обработка Формы
*/

function customFunctionTask1() {
  const func1 = () => {

    const form = document.getElementById("form");
    form.addEventListener("submit", function(evt) {
      evt.preventDefault();
      const data = new FormData(form);
      const url = "mail.php";
      // console.log(data);
      request(data, url, function(response) {
        console.log(response);
      });
    });

    const ajax = document.querySelector(".ajax");
    const btn = document.querySelector(".btn-ajax");

    btn.addEventListener("click", function (evt) {
      response(dataJson, function (resp) {
        const data = JSON.parse(resp);
        const arr = data.players;
        const cont = document.querySelector(".container");
        const elements = arr.forEach(elem => {
          const div = document.createElement("div");
          div.innerHTML = `Имя: ${elem.lastname} Фамилия: ${elem.firstname} город: ${elem.city}`;
          cont.appendChild(div);
        });
      });
    });

    // функция для запроса данных
    function response(url, fn) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url + (new Date().getTime()), true);
      xhr.responseType= "json";
      xhr.addEventListener("readystatechange", function() {
        if (xhr.readyState !== 4) {
          return;
        }
        if (xhr.status !== 200) {
          console.log(xhr.status + ":" + xhr.statusText);
        }
        if (xhr.readyState === 4) {
          fn(xhr.responseText);
        }
      });
      xhr.send();
    }

    // функция для отправки данных
    function request(data, url, fn) {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.addEventListener("readystatechange", function() {
        if (xhr.readyState !== 4) {
          return;
        }
        if (xhr.status !== 200) {
          console.log(xhr.status + ":" + xhr.statusText);
        }
        if (xhr.readyState === 4) {
          fn(xhr.responseText);
        }
      });
      xhr.send(data);
    }
  };
  func1();
}

export default customFunctionTask1;

