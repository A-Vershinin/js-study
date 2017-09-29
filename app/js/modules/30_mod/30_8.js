(function () {
  /*
  Дан инпут. В него вводится текст. По потери фокуса узнайте количество
  символов в самом длинном слове в этом тексте.
  */
  function customFunctionTask8() {
    function customFunction() {
      var input = document.querySelector("#field");

      function changeCustom(input) {
        input.addEventListener("blur", inputHandler);


        function inputHandler() {
          var i;
          var j;
          var arr;
          var arr2;
          var max = 0;
          var num;
          var str = this.value;

          if (str.length !== 0) {
            arr = str.split(" ");
            for (i = 0; i < arr.length; i++) {
              num = 0;
              arr2 = arr[i].split("");
              for (j = 0; j < arr2.length; j++) {
                num += 1;
              }
              if (num > max) {
                max = num;
              }
            }
          }
          alert(`Кол-во символов в самом длинном слове: ${max}`);
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  window.task8 = customFunctionTask8;
}());

