(function () {
  /*
  Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
  */
  function customFunctionTask7() {
    function customFunction() {
      var input = document.querySelector("#field");

      function changeCustom(input) {
        input.addEventListener("blur", inputHandler);


        function inputHandler() {
          var i;
          var arr;
          var sum = 0;
          var str = this.value;
          if (str.length !== 0) {

            arr = str.split(" ");
            console.log(arr);
            for (i = 0; i < arr.length; i++) {
              sum++;
            }
          }
          alert("Кол-во слов в инпуте: " + sum);
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  window.task7 = customFunctionTask7;
}());

