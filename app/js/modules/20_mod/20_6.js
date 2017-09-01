(function () {
  /*
  Дан HTML код (см. под задачей). Поменяйте содержимое элементов с классом some-text на их порядковый номер в коде.
  <h2 class="some-text">Заголовок с классом some-text.</h2>
  <p class="some-text">Абзац с классом some-text.</p>
  <p class="some-text">Абзац с классом some-text.</p>
  <p>Просто абзац, не поменяется.</p>
  */
  function customFunctionTask6() {
    function customFunction() {
      var btn = document.getElementById("btn-big");
      var textsBlock = document.getElementsByClassName("some-text");

      function chengeCustom(btn, textsBlock) {
        function someHandler() {
          var i;
          for (i = 0; i <= textsBlock.length; i++) {
            textsBlock[i].innerHTML = i+1;
          }
        }
        btn.addEventListener("click", someHandler);
      }
      chengeCustom(btn, textsBlock);
    }
    customFunction();
  }

  window.task6 = customFunctionTask6;
}());
