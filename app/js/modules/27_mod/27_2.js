(function () {
  /*
  Повторите поведение страницы по данному образцу:
  Дана область квадрат 1000*1000. Внутри неё красный квадрат размером 100*100.
  По клику в любое место в этой области, квадрат перемещается в точку клика курсора.
  */
  function customFunctionTask2() {
    function customFunction() {
      var area = document.querySelector(".images-area");

      function changeCustom(area) {
        area.addEventListener("click", areaHandler);

        function areaHandler(evt) {
          var elem = document.querySelector(".figure");
          elem.style.top = evt.clientY + "px";
          elem.style.left = evt.clientX + "px";
          console.log(evt.clientX, evt.clientY);
        }
      }
      changeCustom(area);
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());

