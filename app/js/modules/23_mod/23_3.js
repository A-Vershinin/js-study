(function () {
  /*
  Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста
  дописывается ее href в круглых скобках.
  */
  function customFunctionTask3() {
    function customFunction() {
      var arr = document.querySelectorAll(".link");

      function changeCustom(arr) {
        var i;

        for (i = 0; i < arr.length; i++) {
          arr[i].addEventListener("mouseover", setText);
        }

        function setText() {
          this.innerHTML = this.innerHTML + " " + this.href;
          console.log(this);
        }
      }
      changeCustom(arr);
    }
    customFunction();
  }

  window.task3 = customFunctionTask3;
}());

