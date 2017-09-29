(function () {
  /*
  Дополните предыдущую задачу: после первого наведению на ссылку следует отвязать
  от нее событие, которое добавляет href в конец текста
  */
  function customFunctionTask4() {
    function customFunction() {
      var arr = document.querySelectorAll(".link");

      function changeCustom(arr) {
        var i;

        for (i = 0; i < arr.length; i++) {
          arr[i].addEventListener("mouseover", setText);
        }

        function setText() {
          this.innerHTML = `${this.innerHTML} ${this.href}`;
          console.log(this);
          this.removeEventListener("mouseover", setText);
        }
      }
      changeCustom(arr);
    }
    customFunction();
  }

  window.task4 = customFunctionTask4;
}());

