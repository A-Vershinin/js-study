(function () {
  /*
  Повторите поведение страницы по данному образцу:
  Дана область квадрат 1000*1000. При изменении положения курсора в этой области
  выводиться на экран координата курсора мыши.
  */
  function customFunctionTask() {
    function customFunction() {
      var area = document.querySelector(".images-area");

      function changeCustom(area) {
        area.addEventListener("mousemove", areaHandler);

        function areaHandler(evt) {
          var info = "X: " + evt.clientX + "Y: " + evt.clientY;
          this.innerHTML = info;
        }
      }
      changeCustom(area);
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());

