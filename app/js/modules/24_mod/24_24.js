(function () {
  /*
   Дан элемент #elem. Найдите его соседа снизу его соседа снизу (следующий
   элемент за соседним) и добавьте ему в конец текст '!'.
  */
  function customFunctionTask24() {
    function customFunction() {
      var target = document.querySelector("#elem");

      function changeCustom(target) {
        var elemNext = target.nextElementSibling.nextElementSibling;
        elemNext.innerHTML += "!";
        console.log(elemNext);
      }
      changeCustom(target);
    }
    customFunction();
  }

  window.task24 = customFunctionTask24;
}());

