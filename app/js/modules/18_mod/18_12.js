(function () {
  /*
  Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)..
  */
  function customFunctionTask12() {
    function customFunction() {
      var sumAvareg = 0;

      var arr = [2, 10, -4, 44, 16, 5, -10, 11, 32, 5, 22, 8];

      function getArr(arr) {
        var i;
        var sum = 0;

        for (i = 0; i <= arr.length; i++) {
          sum += arr[i];
        }
        sumAvareg = sum/arr.length;
        return sumAvareg;
      }

      getArr(arr);
      console.log(sumAvareg);
    }
    customFunction();
  }

  window.task12 = customFunctionTask12;
}());
