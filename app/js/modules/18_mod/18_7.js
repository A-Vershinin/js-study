(function () {
  /*
  Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла
  */
  function customFunctionTask7() {
    function customFunction() {
      var arr = [];
      var minNum = 1;
      var maxNum = 10;

      function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function getArr(num) {
        var i;

        for (i = 0; i <= 9; i++) {
          arr[i] = getRandomNum(minNum, maxNum);
        }
        return arr;
      }

      getArr();
      console.log(arr);
    }
    customFunction();
  }

  window.task7 = customFunctionTask7;
}());
