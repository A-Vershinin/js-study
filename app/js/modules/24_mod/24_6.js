(function () {
  /*
  Дан элемент #elem. Выведите последовательно алертом его классы.
  */
  function customFunctionTask6() {
    function customFunction() {
      var elem = document.querySelector(".title");

      function changeCustom(elem) {
        var i;
        var data = elem.classList.length;

        for (i = 0; i < data; i++) {
          alert(elem.classList[i]);
        }
      }
      changeCustom(elem);
    }
    customFunction();
  }

  window.task6 = customFunctionTask6;
}());

