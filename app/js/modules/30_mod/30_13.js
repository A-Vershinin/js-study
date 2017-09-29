(function () {
  /*
  Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1
  значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля
  */
  function customFunctionTask13() {
    function customFunction() {
      var input = document.querySelector("#num");

      function changeCustom(input) {
        var minus = document.querySelector("#plus");
        var plus = document.querySelector("#minus");

        minus.addEventListener("click", btnHandler);
        plus.addEventListener("click", btnHandler);

        function btnHandler() {
          var number = +input.value + +this.value;

          if (number >= 0) {
            input.value = number;
          } else {
            input.value = 0;
          }
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  window.task13 = customFunctionTask13;
}());

