
  /*
  Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в
  этих инпутах и запишите их сумму в четвертый инпут.
  */
  function customFunctionTask() {
    function customFunction() {
      var form = document.querySelector(".form");

      function changeCustom(form) {
        var inputs = form.querySelectorAll("input[type=text]");
        var btn = document.querySelector("#btn2");

        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var i;
          var result = 0;
          var inputLast = form.lastElementChild;

          for (i = 0; i < inputs.length; i++) {
            if (Number(inputs[i].value)) {
              result += Number(inputs[i].value);
            }
          }
          inputLast.innerHTML = result;
          console.log(inputLast);
        }
      }
      changeCustom(form);
    }
    customFunction();
  }

  export default customFunctionTask;

