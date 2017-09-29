
  /*
  Дан селект. Дан инпут. Дана кнопка. Сделайте так, чтобы в инпут можно было ввести
  число, нажать на кнопку и в селекте становился выбранным пункт с этим номером.
  */
  function customFunctionTask4() {
    function customFunction() {
      var selectItem = document.querySelector("#select");

      function changeCustom(selectItem) {
        var temp = 0;
        var btn = document.querySelector("#btn1");
        var input = document.querySelector("#select-input-id");

        btn.addEventListener("click", btnHandler);
        input.addEventListener("keypress", inputHandler);

        function btnHandler() {
          var i;
          var options = selectItem.options;
          console.log(temp);
          for (i = 0; i < options.length; i++) {
            if (options[i].index === temp - 1) {
              options[i].selected = true;
            }
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
  export default customFunctionTask4;

