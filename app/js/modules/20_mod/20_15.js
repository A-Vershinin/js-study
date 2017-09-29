(function () {
  /*
  Повторите страницу по данному по образцу:
  Даны абзацы и  кнопка. при нажатии на кнопку текст в каждом абзаце
  поменяется - спереди добавится порядковый номер абзаца
  */
  function customFunctionTask15() {
    function customFunction() {
      var btn = document.getElementById("btn-big");
      var elems = document.getElementsByTagName("p");

      function chengeCustom(btn, elems) {
        function someHandler() {
          var i;
          for (i = 0; i <= elems.length; i++) {
            elems[i].outerHTML = `${i + 1}. ${elems[i].innerHTML}`;
          }
        }

        btn.addEventListener("click", someHandler);
      }
      chengeCustom(btn, elems);
    }
    customFunction();
  }

  window.task15 = customFunctionTask15;
}());
