(function () {
  /*
  Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом
  же инпуте поставьте эту дату в формате 2016-12-31.
  */
  function customFunctionTask9() {
    function customFunction() {
      var input = document.querySelector("#field");

      function changeCustom(input) {
        input.addEventListener("blur", inputHandler);


        function inputHandler() {
          var arr;
          var arr2;
          var str = this.value;
          var newStr;

          if (str.length !== 0) {
            arr = str.split(".");
            arr2 = arr.reverse();
            newStr = arr2.join("-");
            this.value = newStr;
          }
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  window.task9 = customFunctionTask9;
}());

