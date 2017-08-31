(function () {
  /*
  Заполните массив 10-ю иксами с помощью цикла
  */
  function customFunctionTask4() {
    function customFunction() {
      var arr = [];
      var elem = "x";


      function getArr() {
        var i;

        for (i = 0; i <= 9; i++) {
         arr.push(elem);
        }
        return arr;
      }
      getArr();
      console.log(arr);
    }
    customFunction();
  }

  window.task4 = customFunctionTask4;
}());
