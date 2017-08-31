(function () {
  /*
  Заполните массив числами от 1 до 10 с помощью цикла
  */
  function customFunctionTask5() {
    function customFunction() {
      var arr = [];
      var firstNum = 1;
      var lastNum = 10;


      function getArr(num1, num2) {
        var i;

        for (i = num1; i <= num2; i++) {
          arr[i] = i;
        }
        return arr;
      }
      getArr(firstNum, lastNum);
      console.log(arr);
    }
    customFunction();
  }

  window.task5 = customFunctionTask5;
}());
