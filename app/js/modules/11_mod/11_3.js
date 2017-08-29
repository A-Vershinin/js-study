(function () {
  /*
   Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
   Если есть - выведите 'да', а если нет - выведите 'нет'.
   */
  function checkArrTask() {
    var arr = [1, 2, 3, 3, 4, 5];

    function checkArr(arr) {
      var i;
      var flag = false;
      for (i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
          flag = true;
          break;
        }
      }
      if (flag === true) {
        console.log("да");
      } else {
        console.log("нет");
      }
    }

    checkArr(arr);
  }

  window.task3 = checkArrTask;
}());
