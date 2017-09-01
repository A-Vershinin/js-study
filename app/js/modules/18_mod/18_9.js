(function () {
  /*
  Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
  Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если
  такого элемента нет - ничего не выводите.
  */
  function customFunctionTask9() {
    function customFunction() {
      var arr = [2, 10, -4, 16, 5, -10, 11, 5, 22, 8];

      function getArr(arr) {
        var i;

        for (i = 0; i <= arr.length; i++) {
          if (arr[i] === 5) {
            console.log(arr[i], "Есть");
            break;
          }
        }
        return false;
      }

      // getArr(arr);
    }
    customFunction();
  }

  window.task9 = customFunctionTask9;
}());
