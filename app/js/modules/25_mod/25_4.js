(function () {
  /*
  Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту с учетом границы и padding
  */
  function customFunctionTask4() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.querySelector("#btn-big");
          console.log(elem.offsetHeight);
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }
  window.task4 = customFunctionTask4;
}());

