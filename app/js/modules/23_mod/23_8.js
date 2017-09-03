(function () {
  /*
  Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое
  содержимое на правильное количество символов. Сколько символов должно быть
  в инпуте, указывается в атрибуте data-length. Если вбито правильное количество,
  то граница инпута становится зеленой, если неправильное - красной.
  */
  function customFunctionTask8() {
    function customFunction() {
      var arr = document.querySelectorAll("input[type=text]");

      function changeCustom(arr) {
        var i;
        for (i = 0; i < arr.length; i++) {
          arr[i].addEventListener("blur", getValue);
        }

        function getValue() {
          var currentLength = Number(this.dataset.length);
          // var currentLength = this.dataset.length;
          var inputLength = this.value.length;
          console.log(typeof inputLength);

          if (currentLength === inputLength) {
            this.style.borderColor = "green";
          } else {
            this.style.borderColor = "red";
          }
        }
      }
      changeCustom(arr);
    }
    customFunction();
  }
  window.task8 = customFunctionTask8;
}());

