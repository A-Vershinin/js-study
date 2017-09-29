(function () {
  /*
  Повторите страницу по данному по образцу:
  Дан абзац с красным текстом, и две кнопки ниже. По клику на первую кнопку вывести имя класса у абзаца в алерт,
  по клику на вторую удалить у абзаца атрибут класс;
  */
  function customFunctionTask9() {
    function customFunction() {
      var btn = document.getElementsByClassName("link")[0];
      var btn2 = document.getElementById("btn-big");
      var textBlock = document.querySelectorAll("p.some-text")[0];

      function chengeCustom(btn, btn2, textBlock) {
        function someHandlerDeleteClass() {
          var message = textBlock.getAttribute("class");
          alert(message);
        }
        function someHandlerDeleteAtr() {
          textBlock.removeAttribute("class");
        }

        console.log(textBlock);
        btn.addEventListener("click", someHandlerDeleteClass);
        btn2.addEventListener("click", someHandlerDeleteAtr);
      }
      chengeCustom(btn, btn2, textBlock);
    }
    customFunction();
  }

  window.task9 = customFunctionTask9;
}());
