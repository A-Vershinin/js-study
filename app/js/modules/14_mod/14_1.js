(function () {
  /*
  Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее
  */
  function getArrTask() {
    function getArr() {
      var arr = [];
      var i;
      var str = "";

      for (i = 1; i <= 10; i++){
        str += "x";
        arr.push(str);
      }
      console.log(arr);
    }
    getArr();
  }

  window.task1 = getArrTask;
}());
