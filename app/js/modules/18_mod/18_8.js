(function () {
  /*
  Дан массив с числами. С помощью цикла выведите только те элементы массива,
  которые больше нуля и меньше 10-ти.
  */
  function customFunctionTask8() {
    function customFunction() {
      var arr = [2, 10, -4, 16, -10, 11, 22, 8];

      function getArr(arr) {
        var i;

        for (i = 0; i <= arr.length; i++) {
          if (arr[i] >= 0 && arr[i] <= 10) {
            console.log(arr[i]);
          }
        }
        return false;
      }

      // getArr(arr);
    }
    customFunction();
  }

  window.task8 = customFunctionTask8;
}());
