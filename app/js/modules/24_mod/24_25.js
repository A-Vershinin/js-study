(function () {
  /*
   Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.
  */
  function customFunctionTask25() {
    function customFunction() {
      var target = document.querySelector("#elem");

      function changeCustom(target) {
        var elemPerent = target.parentElement;
        elemPerent.style.backgroundColor = "red";
        console.log(elemPerent);
      }
      changeCustom(target);
    }
    customFunction();
  }

  window.task25 = customFunctionTask25;
}());

