(function () {
  /*
  Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы.
  Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество
  автоматически стали записанными с большой буквы (в том же инпуте)
  */
  function customFunctionTask6() {
    function customFunction() {
      var input = document.querySelector("#field");

      function changeCustom(input) {
        input.addEventListener("blur", inputHandler);
        input.addEventListener("focus", inputHandler2);

        function inputHandler2() {
          // this.value = inputHandler(this.value);
        }

        function inputHandler(str) {
          var i;
          var arr;

          if (str.str.target.value !== 0) {
            arr = str.split(" ");
            for (i = 0; i < arr.length; i++) {
              arr[i] = arr[i].split("");
              arr[i][0] = arr[i][0].toUpperCase();
              arr[i] = arr[i].join("");
            }
            str = arr.join(" ");
            console.log(str);
          }
          return str;
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  window.task6 = customFunctionTask6;
}());

