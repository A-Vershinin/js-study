(function () {
  /*
   Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.
  */
  function customFunctionTask23() {
    function customFunction() {
      var target = document.querySelector("#elem");

      function changeCustom(target) {
        var elemNext = target.nextElementSibling;
        elemNext.innerHTML += "!";
        console.log(elemNext);
      }
      changeCustom(target);
    }
    customFunction();
  }

  window.task23 = customFunctionTask23;
}());

