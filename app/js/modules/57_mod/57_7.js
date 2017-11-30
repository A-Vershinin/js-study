/*
  Дан url и кнопка на странице. Выведите имена всех пользователей на странице в списке и
  по окончанию загрузки вызовите колбек-функцию, выводит в консоль строку "Все пользователи
   загрузились".
 */
function customFunctionTask1() {
  const func1 = () => {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';

    const container = document.querySelector("#result");
    const btn = document.querySelector(".btn-ajax");

    btn.addEventListener("click", () => {
      loadUsers(usersUrl, () => {
        console.log("Все пользователи загрузились");
      });
    });

    function loadUsers(url, cb) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType= "json"; // дополнительный параметр
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState !== xhr.DONE) {return;}
        if (xhr.status !== 200) {
          console.log(xhr.status + ":" + xhr.statusText);
        }
        if (xhr.readyState == 4 && xhr.status == 200) {
          // const data = JSON.parse(xhr.response); // ставим responseType = "json" или сами парсим
          const data = xhr.response;
          let list = document.createElement("ul");
          list.className = "list-group";
          data.forEach(({name}) => {
            const item = document.createElement("li");
            item.className = "list-group-item";
            item.textContent = name;
            list.appendChild(item);
          });
          container.appendChild(list);
        }
        cb();
      });
      xhr.send();
    }
  };
  func1();
}

export default customFunctionTask1;

