(function () {
  /*
  С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str
  */
  function getPiramideTask2() {
    function getPiramide() {
      var i;
      var str = "";
      for (i = 9; i > 0; i--) {
        str += i;
      }
      console.log(str);
    }
    getPiramide();
  }

  window.task3 = getPiramideTask2;
}());
