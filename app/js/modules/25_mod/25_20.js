(function () {
  /*
  По нажатию на кнопку прокрутите страницу на 400px от текущего положения.
  */
  function customFunctionTask20() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          window.scrollBy(0, 400);
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }
  window.task20 = customFunctionTask20;
}());

