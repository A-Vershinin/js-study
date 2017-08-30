(function () {
  /*
  Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
  Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
  делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
  */
  function customFunctionTask() {
    function customFunction() {
      var str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
      var newStr = "";
      var arr;

      function ucfirst(str) {
        var newSomeStr = str[0].toUpperCase() + str.substr(1);
        return newSomeStr;
      }

      arr = str.split(" ");
      function buildNewStr() {
        var i;
        var newArr = [];

        for (i = 0; i <= arr.length - 1; i++) {
          newArr.push(ucfirst(arr[i]));
        }
        newStr = newArr.join(" ");
        return newStr;
      }

      buildNewStr();
      console.log(newStr);
    }
    customFunction();
  }

  window.task1 = customFunctionTask;
}());
