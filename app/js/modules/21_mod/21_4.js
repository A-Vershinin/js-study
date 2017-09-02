(function () {
  /*
  Выведите на экран текущую дату-время в формате "12:59:59 31.12.2014".
  Для решения этой задачи напишите функцию, которая будет добавлять 0 перед
  днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).
  */
  function customFunctionTask4() {
    function customFunction() {
      var date;
      var number = 1;

      date = new Date();

      function getNumber(number){
        if (number >= 0 && number <= 10) {
          return "0" + number;
        } else {
          return number;
        }
      }

      console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + date.getDay() + "." + date.getDate() + "." + date.getFullYear());
      console.log(getNumber(date.getDate() + "." + getNumber(date.getMonth() + 1) + "." + date.getFullYear()));
    }
    customFunction();
  }

  window.task4 = customFunctionTask4;
}());
