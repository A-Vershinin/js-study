(function () {
  /*
   Дан элемент #elem. Найдите родителя его родителя и покрасьте его фон в серый цвет.
  */
  function customFunctionTask26() {
    function customFunction() {
      var target = document.querySelector("#elem");

      function changeCustom(target) {
        var elemPerent = target.parentElement.parentElement;
        elemPerent.style.backgroundColor = "#ccc";
        console.log(elemPerent);
      }
      changeCustom(target);
    }
    customFunction();
  }

  window.task26 = customFunctionTask26;
}());

