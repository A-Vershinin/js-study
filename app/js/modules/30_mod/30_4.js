(function () {
  /*
  Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите
  среднее арифметическое этих чисел (сумма делить на количество).
  */
  function customFunctionTask4() {
    function customFunction() {
      var input = document.querySelector("#field");

      function changeCustom(input) {
        input.addEventListener("blur", inputHandler);

        function inputHandler() {
          var i;
          var total = 0;
          var str = input.value;
          var arr = str.split(",");

          for (i = 0; i < arr.length; i++) {
            total += (Number(arr[i])/i);
          }
          console.log(total);
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  window.task4 = customFunctionTask4;
}());

