(function () {
  /*
  Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его левой границы
  */
  function customFunctionTask2() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector("#btn-big");
          console.log(elem.clientLeft);
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());

