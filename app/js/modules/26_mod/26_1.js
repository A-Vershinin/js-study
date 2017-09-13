(function () {
  /*
  Дана кнопка. По нажатию на эту кнопку выведите высоту окна браузера
  */
  function customFunctionTask() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = document.documentElement.clientHeight;
          console.log(elem);
        }
      }
      // changeCustom(btn);
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());

