(function () {
  /*
  Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии
  на любой из них, но только по первому нажатию. Повторное нажатие на инпут не
  должно вызывать реакции.
  */
  function customFunctionTask6() {
    function customFunction() {
      var arr = document.querySelectorAll("input[type=text");

      function changeCustom(arr) {
        var i;

        for (i = 0; i < arr.length; i++) {
          arr[i].addEventListener("click", getValue);
        }

        function getValue() {
          alert(this.value);
          this.removeEventListener("click", getValue);
        }
      }
      changeCustom(arr);
    }
    customFunction();
  }

  window.task6 = customFunctionTask6;
}());

