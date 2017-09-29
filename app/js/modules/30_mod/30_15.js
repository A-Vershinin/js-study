
  /*
  Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число
  от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
  */
  function customFunctionTask15() {
    function customFunction() {
      var input = document.querySelector("#field");

      function changeCustom(input) {
        input.addEventListener("blur", inputHandler);

        function inputHandler() {
          var number = this.value;

          if (Number(number)) {
            if (number >= 0 && number <= 100) {
              this.style.color = "green";
            } else {
              this.style.color = "red";
            }
          }
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  export default customFunctionTask15;

