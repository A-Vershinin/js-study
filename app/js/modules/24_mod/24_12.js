(function () {
  /*
  Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
  */
  function customFunctionTask12() {
    function customFunction() {
      var list = document.querySelector(".list");
      var arr = ["HTML", "CSS", "JavaScript"];

      function changeCustom(list, arr) {
        var i;
        var elem;

        for (i = 0; i < arr.length; i++) {
          elem = document.createElement("li");
          elem.innerHTML = arr[i];
          list.appendChild(elem);
        }
      }
      changeCustom(list, arr);
    }
    customFunction();
  }

  window.task12 = customFunctionTask12;
}());

