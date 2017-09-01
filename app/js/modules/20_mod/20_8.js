(function () {
  /*
  Повторите страницу по данному по образцу:
  дана кнопка и абзац с текстом. По клику на кнопку вывести имя класса в alert;
  */
  function customFunctionTask8() {
    function customFunction() {
      var btn = document.getElementById("btn-big");
      var textBlock = document.querySelectorAll("p.some-text")[0];

      function chengeCustom(btn, textBlock) {
        function someHandler() {
          var message = textBlock.getAttribute("class");
          alert(message);
        }
        btn.addEventListener("click", someHandler);
      }
      chengeCustom(btn, textBlock);
    }
    customFunction();
  }

  window.task8 = customFunctionTask8;
}());
