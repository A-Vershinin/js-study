(function () {
  /*
  Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет,
  но только если в момент клика нажата клавиша Ctrl.
  */
  function customFunctionTask5() {
    function customFunction() {
      var btn = document.querySelector("#btn1");

      function changeCustom(btn) {
        btn.addEventListener("click", btnHandler);

        function btnHandler(evt) {
          if (evt.ctrlKey) {
            this.style.color = "red";
          }
        }
      }
      changeCustom(btn);
    }
    customFunction();
  }

  window.task5 = customFunctionTask5;
}());

