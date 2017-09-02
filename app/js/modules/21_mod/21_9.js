(function () {
  /*
  Выведите на экран количество часов, прошедшее между 1
  марта 1988 года и текущим моментом с помощью Date.parse.
  */
  function customFunctionTask9() {
    function customFunction() {
      var date;
      var now;
      var time;
      var result;

      time = Date.parse("1988-03-01T00:00:00");
      date = new Date();
      now = date.getTime();
      result = now - time;
      result = result / (1000 * 60 * 60);

      console.log(result);
    }
    customFunction();
  }

  window.task9 = customFunctionTask9;
}());
