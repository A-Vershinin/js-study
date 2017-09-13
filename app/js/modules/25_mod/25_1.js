(function () {
  /*
  Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы.
  */
  function customFunctionTask() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector("#btn-big");
          console.log(elem.clientTop);
        }
      }
      // changeCustom(btn);
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());

