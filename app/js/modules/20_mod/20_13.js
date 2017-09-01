(function () {
  /*
  Повторите страницу по данному по образцу:
  Дан абзац и  кнопка. По клику на кнопку текст в абзаце меняется на другой и цвет красный,
  текст в кнопке меняется на другой и кнопка становится не активна.
   другой.
  */
  function customFunctionTask13() {
    function customFunction() {
      var btn = document.getElementById("btn-big");
      var text = document.getElementById("title");

      function chengeCustom(btn, text) {
        function someHandler() {
          text.innerHTML = "Совсем другой текст";
          text.style.color = "red";
          btn.value = "Новая кнопка";
          btn.disabled = true;
        }

        console.log(btn);
        btn.addEventListener("click", someHandler);
      }
      chengeCustom(btn, text);
    }
    customFunction();
  }

  window.task13 = customFunctionTask13;
}());
