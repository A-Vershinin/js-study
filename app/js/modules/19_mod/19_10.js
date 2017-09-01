(function () {
  /*
  Повторите поведение: по клику на поле поменять текст на "Ой, я поменял текст!", по клику вне поля
  "Ой, я снова поменял текст!"
  */
  function customFunctionTask10() {
    function customFunction() {
      var field = document.getElementById("field");
      var newValue = "Ой, я поменял текст!";
      var newValue2 = "Ой, я cнова поменял текст!";

      function someClick(elem) {
        function go(elem) {
          this.value = newValue;
        }

        function stop(elem) {
          this.value = newValue2;
        }

        elem.addEventListener("focus", go);
        elem.addEventListener("blur", stop);
      }
      // someClick(field);
    }
    customFunction();
  }

  window.task10 = customFunctionTask10;
}());
