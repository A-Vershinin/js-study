(function () {
  /*
  Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину без учета границы, но с padding
  */
  function customFunctionTask5() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector("#btn-big");
          console.log(elem.clientWidth);
        }
      }
      // changeCustom(btn);
    }
    customFunction();
  }
  window.task5 = customFunctionTask5;
}());

