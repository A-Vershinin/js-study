(function () {
  /*
  Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку
  алертом выводился ее src.
  */
  function customFunctionTask() {
    function customFunction() {
      var arr = document.querySelectorAll(".images-block img");

      function changeCustom(arr) {
        var i;

        for (i = 0; i < arr.length; i++) {
          arr[i].addEventListener("click", getPath);
        }

        function getPath() {
          alert(this.getAttribute("src"));
        }
      }
      changeCustom(arr);
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());

