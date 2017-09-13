(function () {
  /*
  Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту без учета границы, но с padding.
  */
  function customFunctionTask6() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector("#btn-big");
          console.log(elem.clientHeight);
        }
      }
      // changeCustom(btn);
    }
    customFunction();
  }
  window.task6 = customFunctionTask6;
}());

