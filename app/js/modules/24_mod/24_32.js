(function () {
  /*
   Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого
   массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.
  */
  function customFunctionTask32() {
    function customFunction() {
      var container = document.querySelector(".row");
      var arr = [1, 2, 3, 4, 5];

      function changeCustom(container, arr) {
        var i;
        var item;
        var list = document.createElement("ul");

        for (i = 0; i < arr.length; i++) {
          item = document.createElement("li");
          item.innerHTML = arr[i];
          list.appendChild(item);
        }
        container.appendChild(list);
      }
      changeCustom(container, arr);
    }
    customFunction();
  }

  window.task32 = customFunctionTask32;
}());

