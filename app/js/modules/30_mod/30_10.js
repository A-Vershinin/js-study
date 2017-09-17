(function () {
  /*
  Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это
  слово читается с начала и с конца одинаково (например, мадам)
  */
  function customFunctionTask10() {
    function customFunction() {
      var input = document.querySelector("#field");
      function changeCustom(input) {
        var btn = document.querySelector("#btn1");
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var i;
          var arr;
          var arr2;
          var str = input.value;
          if (str.length !== 0) {
            arr = str.split("");
            arr2 = str.split("").reverse();
            for (i = 0; i < arr.length; i++) {
              if(arr[i]!== arr2[i]) {
                alert("Это слово не палиндром");
                return;
              }
            }
            alert("Это слово палиндром");
          }
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  window.task10 = customFunctionTask10;
}());

