(function () {
  /*
  Дан элемент #elem. Удалите у него класс www.
  */
  function customFunctionTask2() {
    function customFunction() {
      var elem = document.querySelector(".title");

      function changeCustom(elem) {
        elem.classList.remove("www");
        console.log(elem);
      }
      changeCustom(elem);
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());

