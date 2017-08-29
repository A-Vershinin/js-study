(function () {
  /*
  Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
  Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным
  */
  function getArrTask7() {
    function getArr() {
      var i;
      var j;
      var k;
      var result = 0;
      var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

      for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
          for (k = 0; k < arr[j].length; k++) {
            result += arr[i][j][k];
          }
        }
      }
      console.log(result);
    }
    getArr();
  }

  window.task7 = getArrTask7;
}());
