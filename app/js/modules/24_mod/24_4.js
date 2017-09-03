(function () {
  /*
  Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
  */
  function customFunctionTask4() {
    function customFunction() {
      var elem = document.querySelector(".title");

      function changeCustom(elem) {
        var status = elem.classList.contains("www");
        
        if (status) {
          elem.classList.remove("www");
        } else {
          elem.classList.add("www");
        }
      }
      changeCustom(elem);
    }
    customFunction();
  }

  window.task4 = customFunctionTask4;
}());

