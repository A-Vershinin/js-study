
  /*
  Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и
  запишите в инпут.
  */
  function customFunctionTask17() {
    function customFunction() {
      var input = document.querySelector("#field");

      function changeCustom(input) {
        var btn = document.querySelector("#btn1");
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var i;
          var str = "";
          var symbols = "0123456789qwertyuiopasdfghjklzxcvbnm";

          for (i = 0; i < 8; i++) {
            str += symbols.charAt(Math.floor(Math.random() * symbols.length));
            input.value = str;
          }
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  export default customFunctionTask17;

