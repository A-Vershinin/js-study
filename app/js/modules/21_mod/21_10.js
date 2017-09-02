(function () {
  /*
  Выведите на экран количество секунд с начала дня до настоящего момента времени.
  */
  function customFunctionTask10() {
    function customFunction() {
      var date;
      var now;
      var result;

      date = new Date();
      now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
      result = Math.floor((date.getTime() - now.getTime()) / 1000);

      console.log(result);
    }
    customFunction();
  }

  window.task10 = customFunctionTask10;
}());
