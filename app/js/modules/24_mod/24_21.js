(function () {
  /*
   Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
  */
  function customFunctionTask21() {
    function customFunction() {
      var target = document.querySelector(".list");

      function changeCustom(target) {
        var i;
        var elems = target.children;
        for (i = 0; i < elems.length; i++) {
          elems[i].innerHTML += "!";
        }
        console.log(elems);
      }
      changeCustom(target);
    }
    customFunction();
  }

  window.task21 = customFunctionTask21;
}());

