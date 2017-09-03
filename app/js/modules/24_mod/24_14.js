(function () {
  /*
  Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'.
  */
  function customFunctionTask14() {
    function customFunction() {
      var list = document.querySelector(".list");
      var target = document.querySelector("#elem");

      function changeCustom(list, target) {
        var elem;

        elem = document.createElement("li");
        elem.innerHTML = "!!!";
        list.insertBefore(elem, target);
      }
      changeCustom(list, target);
    }
    customFunction();
  }

  window.task14 = customFunctionTask14;
}());

