/*
  Разметка в ajaxPage.html
  файлы урока перенести на опенсервер и тестировать players.json, mail.php
  Ajax на XHR и jQuery. Обработка формы

 */
function customFunctionTask1() {
  const func1 = () => {

    // Сервер использует ключи name и message, метод Post
    const message = document.getElementById("message");
    message.addEventListener("submit", function (e) {
      const formData = new FormData(message);
      // xhrSend(formData);
      // jquerySend(formData);
      e.preventDefault();
    });


    // запрос нативно
    function xhrSend (formData) {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "mail.php");
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && this.status == 200) {
          const data = JSON.parse(this.responseText);
          let output = "<ul>";
          for (var key in data) {
            output += "<li><b>" + key + "</b>: " + data[key] + "</li>";
          }
          output += "</ul>";
          document.getElementById("result").innerHTML = output;
        }
        if (xhr.status !== 200) {
          console.log(xhr.status + ":" + xhr.statusText);
        }
      });
      xhr.send(formData);
    }

    // запрос на jquery
    function jquerySend (formData) {
      $.ajax({
        type: "POST",
        dataType: "JSON",   // тип данных ответа сервера
        data: formData,     // данные которые необходимо отправить на сервер
        url: "mail.php",
        processData: false, // отменить преобразование данных FormData в строку
        contentType: false, // не устанавливать заголовок Content-Type, это сделает XHR
        success: function (data) {  //  success - обработчик, выполнится после удачного запроса
          let output = "<ul>";
          $.each(data, function (key, value) {
            output += "<li><b>" + key + "</b>: " + value + "</li>";
          });
          output += "</ul>";
          $("#result").html(output);
        },
        error: function (data) {
          console.log("Ошибка загрузки");
          console.log(data);
        }
      });
    }
  };
  func1();
}

export default customFunctionTask1;

