(function () {
  /*
  Реализуйте калькулятор. Должны быть кнопки цифр и операций.
  По нажатию на кнопку '=' должен посчитаться результат. Совет: используйте фунцию eval
  */
  function customFunctionTask() {
    function customFunction() {
      var container = document.querySelector(".container");

      function changeCustom(container) {
        var nextElem = container.children[1];
        var calculate = document.querySelector(".calculate");
        var reset = calculate.querySelector(".calculate__reset");
        var str = "";

        setInterval(show, 1000);
        function show() {
          calculate.style.display = "block";
        }
        calculate.addEventListener("click", calculateHandler);

        function calculateHandler(evt) {
          var input = calculate.querySelector(".calculate__row");

          if (evt.target.textContent === "=") {
            str = eval(input.value);
            input.value = str;
          } else if (evt.target.classList.contains("calculate__reset")) {
            input.value = str;
          } else {
            if (evt.target.classList.contains("calculate__btn")) {
              input.value += evt.target.textContent;
            }
          }
          if (evt.target.classList.contains("calculate__reset")) {
            input.value = "";
          }
        }
        container.insertBefore (calculate, nextElem);
      }
      changeCustom(container);
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());

