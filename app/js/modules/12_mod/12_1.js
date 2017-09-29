(function() {
  /*
   Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны -
   пусть функция вернет true, а если не равны - false
   */
  function checkNumberTask() {
    function checkNumbers(a, b) {
      return console.log(a === b);
    }
    checkNumbers(12, 10);
  }

  window.task1 = checkNumberTask;
}());
