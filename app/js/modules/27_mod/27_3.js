(function () {
  /*
  Повторите поведение страницы по данному образцу:
  Дана поле поиска. Выведите ниже поля в спан номер нажатой
  клавиши, которую вводите в инпут
  */
  function customFunctionTask3() {
    function customFunction() {
      var field = document.querySelector("#field2");

      function changeCustom(field) {
        field.addEventListener("keypress", fieldHandler);

        function fieldHandler(evt) {
          var elem = document.querySelector("#result-box");
          elem.innerHTML = evt.keyCode;
        }
      }
      changeCustom(field);
    }
    customFunction();
  }

  window.task3 = customFunctionTask3;
}());

