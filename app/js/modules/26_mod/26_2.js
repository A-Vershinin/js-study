(function () {
  /*
  Дана кнопка. По нажатию на эту кнопку прокрутите окно браузера до самого низа
  */
  function customFunctionTask2() {
    function customFunction() {
      var btn = document.querySelector("#link");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var elem = window.innerHeight;
          window.scrollBy(0, elem);
          console.log(elem);
        }
      }
      // changeCustom(btn);
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());

