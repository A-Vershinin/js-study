(function () {
  /*
   Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'
  */
  function customFunctionTask22() {
    function customFunction() {
      var target = document.querySelector("#elem");

      function changeCustom(target) {
        var elemNext = target.previousElementSibling;
        elemNext.innerHTML += "!";
        console.log(elemNext);
      }
      changeCustom(target);
    }
    customFunction();
  }

  window.task22 = customFunctionTask22;
}());

