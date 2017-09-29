(function() {
  /*
   Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да',
   а если нет - выведите 'нет'.
   */
  function hasNumberTask() {
    var arr = [1, 2, 3, 4, 5, 6];

    function hasNumber(arr) {
      var i;
      for (i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
          return console.log("да");
        }
      }
      return console.log("нет");
    }
    hasNumber(arr);
  }

  window.task1 = hasNumberTask;
}());
