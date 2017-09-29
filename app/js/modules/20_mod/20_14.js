(function () {
  /*
  Повторите страницу по данному по образцу:
  Даны абзацы и  кнопка. При нажатии на кнопку текст в каждом абзаце поменяется на порядковый номер абзаца
  */
  function customFunctionTask14() {
    function customFunction() {
      var btn = document.getElementById("btn-big");
      var elems = document.getElementsByTagName("p");

      function chengeCustom(btn, elems) {
        function someHandler() {
          var i;
          for (i = 0; i <= elems.length; i++) {
            elems[i].innerHTML = i + 1;
          }
        }

        btn.addEventListener("click", someHandler);
      }
      chengeCustom(btn, elems);
    }
    customFunction();
  }

  window.task14 = customFunctionTask14;
}());
