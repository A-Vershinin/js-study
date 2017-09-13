(function () {
  /*
  По нажатию на кнопку прокрутите страницу до самого низа.
  */
  function customFunctionTask19() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          window.scrollBy(0, document.body.clientHeight);
        }
      }
      // changeCustom(btn);
    }
    customFunction();
  }
  window.task19 = customFunctionTask19;
}());

