(function () {
  /*
  Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла.
  Дроби округляйте до двух знаков в дробной части
  */
  function customFunctionTask6() {
    function customFunction() {
      var arr = [];

      function getRandomNum() {
        return Math.random().toFixed(2);
      }

      function getArr(num) {
        var i;

        for (i = 0; i <= 9; i++) {
          arr[i] = getRandomNum();
        }
        return arr;
      }

      getArr();
      console.log(arr);
    }
    customFunction();
  }

  window.task6 = customFunctionTask6;
}());
