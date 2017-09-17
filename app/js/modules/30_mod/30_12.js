(function () {
  /*
  Даны N абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
  */
  function customFunctionTask12() {
    function customFunction() {
      var text = document.querySelectorAll(".some-text");

      function changeCustom(text) {
        var btn = document.querySelector("#btn-big");
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          for (i = 0; i < text.length; i++) {
            text[i].innerHTML += i+1;
          }
        }
      }
      changeCustom(text);
    }
    customFunction();
  }

  window.task12 = customFunctionTask12;
}());

