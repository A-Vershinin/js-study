(function () {
  /*
  Повторите страницу по данному по образцу:
  дана два поля, при нажатии на кнопку значения полей складываются и выводяться рядом с вторым полем
  в span
  */
  function customFunctionTask4() {
    function customFunction() {
      var btn = document.getElementById("btn1");
      var result = document.getElementById("result-box");
      var field = document.getElementById("field");
      var field2 = document.getElementById("field2");

      function chengeCustom(btn, result, field, field2) {
        function someHandler() {
          result.innerHTML = (+field.value) + (+field2.value);
        }
        btn.addEventListener("click", someHandler);
      }
      chengeCustom(btn, result, field, field2);
    }
    customFunction();
  }

  window.task4 = customFunctionTask4;
}());
