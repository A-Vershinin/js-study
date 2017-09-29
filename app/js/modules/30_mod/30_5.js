
  /*
  Дан инпут. В него вводится ФИО через пробел. По потери фокуса
  запишите фамилию, имя и отчество в отдельные инпуты.
  */
  function customFunctionTask5() {
    function customFunction() {
      var input = document.querySelector("#field");

      function changeCustom(input) {
        input.addEventListener("focus", inputHandler2);
        input.addEventListener("blur", inputHandler);

        function inputHandler2() {
          this.value = "";
        }

        function inputHandler() {
          var i;
          var arr = [];

          var elems = document.getElementsByClassName("num");
          var str = this.value;
          if (str !== 0) {
            arr = str.split(" ");
            for (i = 0; i < arr.length; i++) {
              elems[i].value = arr[i];
            }
          }
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  export default customFunctionTask5;

