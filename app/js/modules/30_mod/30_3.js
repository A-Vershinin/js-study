(function () {
  /*
  Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
  */
  function customFunctionTask3() {
    function customFunction() {
      var input = document.querySelector("#field");

      function changeCustom(input) {
        input.addEventListener("blur", inputHandler);

        function inputHandler() {
          var i;
          var total = 0;
          var str = input.value;
          var arr = str.split("");

          for (i = 0; i < arr.length; i++) {
            total += Number(arr[i]);
          }
          console.log(total);
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  window.task3 = customFunctionTask3;
}());

