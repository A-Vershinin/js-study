(function () {
  /*
  Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
  Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным
  */
  function getArrTask6() {
    function getArr() {
      var i;
      var j;
      var result = 0;
      var arr = [[1, 2, 3], [4, 5], [6]];

      for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
          result += arr[i][j];
        }
      }
      console.log(result);
    }
    getArr();
  }

  window.task6 = getArrTask6;
}());
