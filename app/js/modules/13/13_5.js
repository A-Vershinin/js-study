(function () {
  /*
  Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 10 рядов, а не 5:
  x
  xx
  xxx
  xxxx
  xxxxx
  */
  function getPiramideTask4() {
    function getPiramide() {
      var i;
      var j;
      var str = "";

      for (i = 1; i <= 10; i++) {
        str += "x";
        console.log(str);
      }
    }
    getPiramide();
  }

  window.task5 = getPiramideTask4;
}());
