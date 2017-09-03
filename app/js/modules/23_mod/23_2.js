(function () {
  /*
  Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в
  атрибут title запишется ее текст.
  */
  function customFunctionTask2() {
    function customFunction() {
      var arr = document.querySelectorAll(".link");

      function changeCustom(arr) {
        var i;

        for (i = 0; i < arr.length; i++) {
          arr[i].addEventListener("mouseover", setText);
        }

        function setText() {
          var text = this.innerHTML;
          this.setAttribute("title", text);
          console.log(this.getAttribute("title"));
        }
      }
      changeCustom(arr);
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());

