(function () {
  /*
  Дан селект. Дан инпут. Дана кнопка. Сделайте так, чтобы в инпут можно было ввести
  число, нажать на кнопку и в селекте становился выбранным пункт с этим номером.
  */
  function customFunctionTask4() {
    function customFunction() {
      var selectItem = document.querySelector("#select");

      function changeCustom(selectItem) {
        var arr = [];
        var temp = 0;
        var btn = document.querySelector("#btn1");
        var input = document.querySelector("#select-input-id");

        btn.addEventListener("click", btnHandler);
        input.addEventListener("keypress", inputHandler);

        function btnHandler(evt) {
          var i;
          var options = selectItem.options;
          for (i = 0; i < options.length; i++) {
            if (options[i].index === temp) {
              options[i].selected = true;
            }
            console.log(options[i]);
            console.log(temp);
          }
        }

        function inputHandler(evt) {
          if (Number(evt.key)) {
            temp = Number(evt.key);
          } else {
            return false;
          }
          return temp;
        }
      }
      changeCustom(selectItem);
    }
    customFunction();
  }
  window.task4 = customFunctionTask4;
}());

