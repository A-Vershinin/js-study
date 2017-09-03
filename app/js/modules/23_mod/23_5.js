(function () {
  /*
  Привяжите всем инпутам следующее событие - по потери фокуса каждый инпут
  выводит свое value в абзац с id="test"
  */
  function customFunctionTask5() {
    function customFunction() {
      var arr = document.querySelectorAll("input[type=text");

      function changeCustom(arr) {
        var i;

        for (i = 0; i < arr.length; i++) {
          arr[i].addEventListener("blur", setBluer);
        }

        function setBluer() {
          var box = document.querySelector("#test");
          var tmp = this.value;
          box.innerHTML = tmp;
          console.log(tmp);
        }
      }
      changeCustom(arr);
    }
    customFunction();
  }

  window.task5 = customFunctionTask5;
}());

