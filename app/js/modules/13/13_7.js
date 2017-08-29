(function () {
  /*
 Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
  xx
  xxxx
  xxxxxx
  xxxxxxxx
  xxxxxxxxxx
  */
  function getPiramideTask6() {
    function getPiramide() {
      var i;
      var j;
      var str ="";

      for (i = 1; i <= 5; i++) {
        str += "xx";
        console.log(str);
      }
    }
    getPiramide();
  }

  window.task7 = getPiramideTask6;
}());
