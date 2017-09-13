(function () {
  /*
  Дан элемент #elem. Добавьте ему класс www.
  */
  function customFunctionTask() {
    function customFunction() {
      var elem = document.querySelector(".title");

      function changeCustom(elem) {
        elem.classList.add("www");
      }
      changeCustom(elem);
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());

