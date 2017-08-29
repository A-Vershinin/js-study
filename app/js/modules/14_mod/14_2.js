(function () {
  /*
  Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
  */
  function getArrTask2() {
    function getArr() {
      var i;
      var str;
      var arr = [];

      for (i = 1; i <= 9; i++) {
        str = "";
        for (j = 1; j <= i; j++) {
          str += i;
        }
        document.write("<br>");
        arr.push(str);
      }
      console.log(arr);
    }
    getArr();
  }

  window.task2 = getArrTask2;
}());
