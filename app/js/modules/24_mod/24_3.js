(function () {
  /*
  Дан элемент #elem. Проверьте наличие у него класса www.
  */
  function customFunctionTask3() {
    function customFunction() {
      var elem = document.querySelector(".title");

      function changeCustom(elem) {
        var status = elem.classList.contains("www");
        console.log(status);
      }
      changeCustom(elem);
    }
    customFunction();
  }

  window.task3 = customFunctionTask3;
}());

