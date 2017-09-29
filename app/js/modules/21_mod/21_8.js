(function () {
  /*
	Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени
  */
  function customFunctionTask8() {
    function customFunction() {
      var data;
      var minute;

      data = new Date();

      function showTime(data) {
        minute = Math.floor(data.getTime() / (1000 * 60));
        return minute;
      }
      // console.log(showTime(data));
      // showTime(data);
    }
    customFunction();
  }

  window.task8 = customFunctionTask8;
}());
