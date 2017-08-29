(function () {
  /*
С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
  */
  function getPiramideTask() {
    function getPiramide() {
      var i;
      var str = "";
      for (i = 1; i <= 9; i++) {
        str += i;
      }
      console.log(str);
    }
    getPiramide();
  }

  window.task2 = getPiramideTask;
}());
