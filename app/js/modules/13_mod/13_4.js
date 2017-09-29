(function () {
  /*
  С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str
  */
  function getPiramideTask3() {
    function getPiramide() {
      var i;
      var str = "";
      for (i = 1; i <= 10; i++) {
        str += `-${i}`;
      }
      str += "-";
      console.log(str);
    }
    getPiramide();
  }

  window.task4 = getPiramideTask3;
}());
