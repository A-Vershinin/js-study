(function () {
  /*
  Создайте тикающие часики: 21:17:13
  */
  function customFunctionTask3() {
    function customFunction() {
      var some;

      function changeCustom() {
        var date;
        var clock;

        function go(){
          window.timerId = window.setInterval(timer, 500);
        }

        function timer() {
          clock = document.querySelector(".clock-timer");
          date = new Date();
          clock.innerHTML = addZero(date.getHours())+ ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());
        }

        function addZero(num){
          if(num <= 9) return "0" + num;
          else return num;
        }
        function startTime() {
          go();
        }
        startTime();
      }
      changeCustom();
    }
    customFunction();
  }

  window.task3 = customFunctionTask3;
}());

