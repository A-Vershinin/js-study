
  /*
  Дана форма с id="form". В ней даны инпуты, в них числа. Дана кнопка. По нажатию
  на эту кнопку получите форму по ее id, затем циклом переберите все инпуты в ней
  и найдите сумму чисел из этих инпутов.
  */
  function customFunctionTask() {
    function customFunction() {
      var form = document.querySelector("#form");

      function changeCustom(form) {
        var btn = form.querySelector("#form-btn");

        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var i;
          var result = 0;
          var parent = this.parentElement;
          var inputs = parent.querySelectorAll("input[type='text']");
          for (i = 0; i < inputs.length; i++) {
            result += Number(inputs[i].value);
          }
        }
      }
      // changeCustom(form);
    }
    customFunction();
  }

  export default customFunctionTask;

