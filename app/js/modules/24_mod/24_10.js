(function () {
  /*
  Даны элементы с классом link. Добавьте каждому элементу в конец название его тега в нижнем регистре.
  */
  function customFunctionTask10() {
    function customFunction() {
      var elem = document.querySelectorAll("link");

      function changeCustom(elem) {
        var i;

        for (i = 0; i < elem.length; i++) {
          elem[i].innerHTML = elem[i].innerHTML + elem[i].tagName.toLowerCase();
        }
      }
      changeCustom(elem);
    }
    customFunction();
  }

  window.task10 = customFunctionTask10;
}());

