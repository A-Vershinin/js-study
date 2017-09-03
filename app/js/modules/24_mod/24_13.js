(function () {
  /*
  Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый
  элемент стоял в своем li. Сделайте так, чтобы к вставляемым li было привязано следующее
  событие: по нажатию на li она должна вывести на экран свой текст.
  */
  function customFunctionTask13() {
    function customFunction() {
      var list = document.querySelector(".list");
      var arr = ["HTML", "CSS", "JavaScript"];

      function changeCustom(list, arr) {
        var i;
        var elem;

        for (i = 0; i < arr.length; i++) {
          elem = document.createElement("li");
          elem.innerHTML = arr[i];
          elem.addEventListener("click", getText);
          list.appendChild(elem);
        }

        function getText() {
          alert(this.innerHTML);
        }
      }
      changeCustom(list, arr);
    }
    customFunction();
  }

  window.task13 = customFunctionTask13;
}());

