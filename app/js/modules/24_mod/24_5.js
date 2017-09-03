(function () {
  /*
  Дан элемент #elem. Узнайте количество его классов.
  */
  function customFunctionTask5() {
    function customFunction() {
      var elem = document.querySelector(".title");

      function changeCustom(elem) {
        var data = elem.classList.length;
        console.log(data);
      }
      changeCustom(elem);
    }
    customFunction();
  }

  window.task5 = customFunctionTask5;
}());

