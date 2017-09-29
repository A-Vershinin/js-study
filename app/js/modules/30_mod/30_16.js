
  /*
  Дан инпут. Выделите любой текст на странице. По окончанию выделения этот
  текст должен записаться в этот инпут.
  */
  function customFunctionTask16() {
    function customFunction() {
      var input = document.querySelector("#field");

      function changeCustom(input) {
        document.documentElement.addEventListener("mouseup", pageHandler);

        function pageHandler() {
          var input = document.querySelector("#field");
          var content = window.getSelection().toString();
          input.value = content;
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  export default customFunctionTask16;

