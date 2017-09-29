(function() {
  /*
   Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
   Если отрицательное - пусть функция вернет true, а если нет - false.
   */
  function hasNumberTask() {
    function hasNumber(number) {
      return console.log(number >= 0);
    }
    hasNumber(5);
  }

  window.task3 = hasNumberTask;
}());
