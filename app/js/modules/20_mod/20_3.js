(function () {
  /*
  Повторите страницу по данному по образцу:
  дана кнопка и абзац с текстом, при нажатии на кнопку текст в абзаце
  не поменяется и тег поменяется на h3.
  */
  function customFunctionTask3() {
    function customFunction() {
      var btn = document.getElementById("btn-big");
      var text = document.getElementById("title");

      function chengeCustom(btn, text) {
        function someHandler() {
          text.outerHTML = `<h3>${text.innerHTML}</h3>`;
        }
        btn.addEventListener("click", someHandler);
      }
      chengeCustom(btn, text);
    }
    customFunction();
  }

  window.task3 = customFunctionTask3;
}());
