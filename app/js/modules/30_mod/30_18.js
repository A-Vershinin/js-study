(function () {
  /*
  В инпут через запятую вводятся страны. По нажатию на кнопку сделайте так, чтобы эти страны
  записались в ul под инпутом (каждая страна отдельный li)
  */
  function customFunctionTask18() {
    function customFunction() {
      var input = document.querySelector("#field");

      function changeCustom(input) {
        var btn = document.querySelector("#btn1");
        var list = document.querySelector(".list");

        btn.addEventListener("click", btnHandler);

        function btnHandler() {
          var i;
          var item;
          var arr;
          var str = input.value;

          arr = str.split(",");
          for (i = 0; i < arr.length; i++) {
            item = document.createElement("li");
            item.textContent = arr[i];
            list.appendChild(item);
          }
        }
      }
      changeCustom(input);
    }
    customFunction();
  }

  window.task18 = customFunctionTask18;
}());

