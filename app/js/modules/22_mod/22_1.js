(function () {
  /*
  Повторите страницы по образцу: дано поле и кнопка. Создать таймер отчёта от 0 до бесконечности
  и выводить цифру в поле.
  */
  function customFunctionTask() {
    function customFunction() {
      var btn = document.getElementById("btn2");

      function changeCustom(btn) {
        function startTimer() {
          return window.setInterval(timer, 1000);
        }

        function timer() {
          var elem = document.getElementById("field2");
          elem.value = parseInt(elem.value)+1;
        }

        btn.addEventListener("click", startTimer);
      }
      // changeCustom(btn);
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());

