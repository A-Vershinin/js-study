(function () {
  /*
  Создайте таймер обратновго отсчёта с 10 до 0. По клику на кнопку начинается отсчёт.
  */
  function customFunctionTask4() {
    function customFunction() {
      var btn = document.getElementById("btn-timer-start");

      function changeCustom(btn) {
        var elem = document.querySelector("#timer-filed");
        elem.value = 10;

        function go() {
          btn.setAttribute("disabled", true);
          window.timerId = window.setInterval(timer, 300);
        }
        function stop() {
          window.clearInterval(window.timerId);
        }

        function timer() {
          var number = parseInt(elem.value) - 1;
          elem.value = number;
          if (number === 0) {
            stop();
          }
        }
        btn.addEventListener("click", go);
      }
      changeCustom(btn);
    }
    customFunction();
  }

  window.task4 = customFunctionTask4;
}());

