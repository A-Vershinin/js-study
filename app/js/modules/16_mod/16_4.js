(function () {
  /*
    Дана строка, например, '123456'. Сделайте из нее '214365'
  */
  function customFunctionTask4() {
    function customFunction() {
      var str = "123456";
      var result;

      function buildNewString(str) {
        var i;
        var arr;
        var newArr = [];
        var newStr = "";

        arr = str.split("");

        for (i = 0; i <= arr.length; i++) {
          if (i % 2 === 0) {
            newArr[i] = arr[i + 1];
          } else {
            newArr[i] = arr[i - 1];
          }
        }
        newStr = newArr.join("");
        return newStr;
      }
      result = buildNewString(str);
      console.log(result);
    }
    customFunction();
  }
  window.task4 = customFunctionTask4;
}());
