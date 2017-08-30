(function () {
  /*
  Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
  */
  function customFunctionTask2() {
    function customFunction() {
      var str = "var_text_hello";
      var newStr = "";
      var arr;

      function ucfirst(str) {
        var newSomeStr = str[0].toUpperCase() + str.substr(1);
        return newSomeStr;
      }

      arr = str.split("_");
      function buildNewStr() {
        var i;
        var newArr = [];

        for (i = 0; i <= arr.length - 1; i++) {
          if ( i === 0) {
            newArr.push(arr[i]);
          } else {
            newArr.push(ucfirst(arr[i]));
          }
        }
        newStr = newArr.join("");
        return newStr;
      }

      buildNewStr();
      console.log(newStr);
    }
    customFunction();
  }

  window.task2 = customFunctionTask2;
}());
