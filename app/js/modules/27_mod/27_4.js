(function () {
  /*
  Повторите поведение страницы по данному образцу:
  Дана поле поиска. Выведите ниже поля в спан буквенное
  значение нажатой клавиши, которую вводите в инпут
  */
  function customFunctionTask4() {
    function customFunction() {
      var field = document.querySelector("#field2");

      function changeCustom(field) {
        field.addEventListener("keypress", fieldHandler);

        function fieldHandler(evt) {
          var elem = document.querySelector("#result-box");
          elem.innerHTML = String.fromCharCode(evt.keyCode);
        }
      }
      changeCustom(field);
    }
    customFunction();
  }

  window.task4 = customFunctionTask4;
}());

