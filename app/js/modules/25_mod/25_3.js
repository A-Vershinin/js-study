(function () {
  /*
  Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding
  */
  function customFunctionTask3() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector("#btn-big");
          console.log(elem.offsetWidth);
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }
  window.task3 = customFunctionTask3;
}());

