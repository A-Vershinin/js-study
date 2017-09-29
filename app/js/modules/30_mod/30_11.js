
  /*
  Дан инпут. В него вводится число. Проверьте по вводу, что это число содержит внутри себя цифру 3.
  */
  function customFunctionTask11() {
    function customFunction() {
      var input = document.querySelector("#field");
      function changeCustom(input) {
        input.addEventListener("click", inputHandler);

        function inputHandler() {
          var i;
          var arr;
          var str = this.value;
          if (str.length !== 0) {
            arr = str.split("");
            console.log(arr);
            for (i = 0; i < str.length; i++) {
              if (Number(arr[i] === 3)) {
                alert("Это число содержит цифру 3");
                return;
              }
            }
            alert("Это число не содержит цифру 3");
          }
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  export default customFunctionTask11;

