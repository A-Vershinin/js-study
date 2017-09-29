
  /*
  Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите
  числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result".
  */
  function customFunctionTask2() {
    function customFunction() {
      var inputs = document.querySelectorAll(".num");

      function changeCustom(inputs) {
        var btn = document.querySelector("#btn2");
        var result = document.querySelector("#result");

        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var i;
          var total = 0;

          for (i = 0; i < inputs.length; i++) {
            if (Number(inputs[i].value)) {
              total += Number(inputs[i].value);
            }
          }
          result.innerHTML = total;
          console.log(total);
        }
      }
      changeCustom(inputs);
    }
    customFunction();
  }

  export default customFunctionTask2;
