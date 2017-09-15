(function () {
  /*
  Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul
  будет добавляться новый li с текстом 'пункт'. Сделайте так, чтобы при клике на каждый
  li, ему в конец добавлялся '!'. Это должно работать и для вновь добавленных li. Задачу
  решите с помощью делегирования (то есть событие должно быть навешано на ul)
  */
  function customFunctionTask() {
    function customFunction() {
      var list = document.querySelector(".list");

      function changeCustom(list) {
        var btn = document.querySelector("#btn-list");

        btn.innerHTML = "Пункт";
        btn.addEventListener("click", btnHandler);
        list.addEventListener("click", listHandler);

        function btnHandler(evt) {
          var item = document.createElement("li");
          item.textContent = "Пункт";
          list.appendChild(item);
        }

        function listHandler(evt) {
          if (evt.target.tagName === "LI") {
            evt.target.innerHTML = evt.target.innerHTML + "!";
          }
        }
      }
      changeCustom(list);
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());

