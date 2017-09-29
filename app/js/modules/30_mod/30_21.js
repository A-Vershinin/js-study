(function () {
  /*
  Дан список и кнопка. По нажатию на кнопку посортируйте пункты списка по возрастанию.
  */
  function customFunctionTask21() {
    function customFunction() {
      var list = document.querySelector(".list");

      function changeCustom(list) {
        var btn = document.querySelector("#btn-list");
        btn.addEventListener("click", btnHandler);


        function btnHandler() {
          var i;
          var arr = [];
          var children = list.children;

          for (i = 0; i < children.length; i++) {
            arr[i] = children[i].innerHTML;
          }

          arr.sort((a, b) => a - b);

          for (i = 0; i < children.length; i++) {
            children[i].innerHTML = arr[i];
          }
        }
      }
      changeCustom(list);
    }
    customFunction();
  }

  window.task21 = customFunctionTask21;
}());

