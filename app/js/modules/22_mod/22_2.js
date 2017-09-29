(function () {
  /*
  Повторите страницы по образцу: дано поле и две кнопки старт и стоп. Создать таймер отчёта
  от 0 до бесконечности и по кнопка старт запускайте таймер, по стоп - останавливайте.
  */
  function customFunctionTask2() {
    function customFunction() {
      var btnStart = document.getElementById("btn-timer-start");
      var btnEnd = document.getElementById("btn-timer-end");

      function changeCustom(btn1, btn2) {
        function startTimer() {
          window.timerId = window.setInterval(timer, 1000);
        }
        function endTimer() {
          window.clearInterval(window.timerId);
        }
        function timer() {
          var elem = document.getElementById("timer-filed");
          elem.value = parseInt(elem.value) + 1;
        }

        btn1.addEventListener("click", startTimer);
        btn2.addEventListener("click", endTimer);
      }
      // changeCustom(btnStart, btnEnd);
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());

