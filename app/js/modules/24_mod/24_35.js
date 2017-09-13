(function () {
  /*
   Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.
  */
  function customFunctionTask35() {
    function customFunction() {
      var btn = document.querySelector("#btn-list");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          this.parentElement.style.display = "none";
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }

  window.task35 = customFunctionTask35;
}());

