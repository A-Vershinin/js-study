(function () {
  /*
  Повторите страницу по данному по образцу:
  Дано поле и span рядом. Вводим любой текст в поле и он должен показываться в спане
  */
  function customFunctionTask11() {
    function customFunction() {
      var field = document.getElementById("field2");
      var span = document.getElementById("result-box");

      function chengeCustom(field, span) {
        function someHandler() {
          span.innerHTML = field.value;
        }
        console.log(span);

        field.addEventListener("keyup", someHandler);
      }
      chengeCustom(field, span);
    }
    customFunction();
  }

  window.task11 = customFunctionTask11;
}());
