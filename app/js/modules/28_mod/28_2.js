(function () {
  /*
  Дана таблица с юзерами с двумя колонками: имя и фамилия. Под таблицей сделайте форму, с
  помощью которой можно будет добавить нового юзера в таблицу. Сделайте так, чтобы при клике
  на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки. Задачу
  решите с помощью делегирования (то есть событие должно быть навешано на table).
  */
  function customFunctionTask2() {
    function customFunction() {
      var table = document.querySelector("#table");

      function changeCustom(table) {
        var form = document.querySelector("#form");
        table.addEventListener("click", chengeUser);
        form.addEventListener("keypress", addUser);

        function chengeUser(evt) {
          var temp;
          if (evt.target.tagName === "TD" && evt.target.innerText !== "Имя" && evt.target.innerText !== "Фамилия") {
            temp = prompt("Введите значение: ");
            evt.target.innerHTML = temp;
          }
        }
        function addUser(evt) {
          var i;
          var td;
          var input = form.querySelectorAll("input[type=\"text\"]");
          var tr = document.createElement("tr");
          if (evt.keyCode === 13) {
            tr.classList.add("table-row");
            table.lastElementChild.appendChild(tr);
            for (i = 0; i < input.length; i++) {
              td = document.createElement("td");
              td.innerHTML = input[i].value;
              tr.appendChild(td);
              input[i].value = "";
            }
          }
        }
      }
      changeCustom(table);
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());

