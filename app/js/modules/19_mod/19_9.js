(function () {
  /*
  Повторите поведение: по фокусу в поле поменять текст на "Ой, я поменял текст!"
  */
  function customFunctionTask9() {
    function customFunction() {
      var field = document.getElementById("field");
      var newValue = "Ой, я поменял текст!";

      function changeSome(elem) {
        this.addEventListener("click", function() {
          this.value = newValue;
        }, false);
      }
      changeSome(field);
    }
    // customFunction();
  }

  window.task9 = customFunctionTask9;
}());
