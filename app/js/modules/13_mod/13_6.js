(function () {
  /*
  С помощью двух вложенных циклов нарисуйте следующую пирамидку:.
  1
  22
  333
  4444
  55555
  666666
  7777777
  88888888
  999999999
  */
  function getPiramideTask5() {
    function getPiramide() {
      var i;
      var j;

      for (i = 1; i <= 9; i++) {
        for (j = 1; j <= i; j++) {
          document.write(i);
        }
        document.write("<br>");
      }
    }
    getPiramide();
  }

  window.task6 = getPiramideTask5;
}());
