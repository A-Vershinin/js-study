(function () {
  /*
  Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке
  */
  function getArrTask5() {
    function getArr() {
      var i;
      var arr = [1, 2, 3, 4, 5, 6, 7];
      var arr2 = [];

      for (i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
      }
      return arr2;
    }
    console.log(getArr());
  }

  window.task5 = getArrTask5;
}());
