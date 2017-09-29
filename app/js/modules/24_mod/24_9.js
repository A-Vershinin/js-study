(function () {
  /*
  Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.
  */
  function customFunctionTask9() {
    function customFunction() {
      var elem = document.querySelector("#title");

      function changeCustom(elem) {
        elem.addEventListener("click", () => {
          alert(elem.tagName.toLowerCase());
        });
      }
      changeCustom(elem);
    }
    customFunction();
  }

  window.task9 = customFunctionTask9;
}());

