/*
  Добавили ещё обработчиков. Разделили работу за работу с запросами и обработчики.
 */
function customFunctionTask1 () {
  const func1 = () => {
    const SERVER_URL = "https://jsonplaceholder.typicode.com/users";

    const container = document.querySelector("#result");
    const btn = document.querySelector(".btn-ajax");

    btn.addEventListener("click", () => {
      backend.load();
    });

    const backend = {
      save: function (data) {
        const xhr = loadData(onSuccess, onError);
        xhr.open("POST", SERVER_URL, true);
        xhr.send(data);
      },
      load: function () {
        const xhr = loadData(onSuccess, onError);
        xhr.open("GET", SERVER_URL, true);
        xhr.send();
      }
    };

    function onSuccess(data) {
      let list = document.createElement("ul");
      list.className = "list-group";
      data.forEach(({name}) => {
        const item = document.createElement("li");
        item.className = "list-group-item";
        item.textContent = name;
        list.appendChild(item);
      });
      container.appendChild(list);
      console.log("Все пользователи загрузились");
    }

    function onError (xhr) {
      switch (xhr.status) {
        case 0:
          console.log("Не известный статус запроса " + xhr.status);
          break;
        case 404:
          console.log("Статус " + xhr.status + " " + ", Ничего не найдено");
          break;
        default:
          console.log("Не известный статус " + xhr.status + ":" + xhr.statusText);
      }
    }

    let loadData = function (onSuccess, onError) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState !== xhr.DONE) {return;}
        if (xhr.status !== 200) {
          onError(xhr);
        }
        if (xhr.readyState == 4 && xhr.status == 200) {
          // console.log(xhr.response);
          onSuccess(xhr.response);
        }
      });
      xhr.addEventListener("error", () => {
        onError("Произошла ошибка соединения");
      });
      xhr.addEventListener("timeout", () => {
        onError("Запрос не успел выполнится за: " + xhr.timeout + "мс");
      });
      xhr.timeout = 1000;
      return xhr;
    };
  };
  func1();
}

export default customFunctionTask1;

