(function () {
  /*
  Повторите страницу по данному по образцу:
  дана кнопка и абзац с текстом, при нажатии на кнопку текст в абзаце
  поменяется на другой и тег станет h3.
  */
  function customFunctionTask2() {
    function customFunction() {
      var btn = document.getElementById("btn-big");
      var text = document.getElementById("title");

      function chengeCustom(btn, text) {

        function someHandler() {
          text.outerHTML  = "<h3>Заголовок превратился в h3</h3>";
        }
        btn.addEventListener("click", someHandler);
      }
      chengeCustom(btn, text);
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());
