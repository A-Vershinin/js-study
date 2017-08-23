(function() {
  /*
   Дано число, например 31. Проверьте, что это число не делится ни на
   одно другое число кроме себя самого и единицы. То есть в нашем случае нужно
   проверить, что число 31 не делится на все числа от 2 до 30. Если число не
   делится - выведите 'false', а если делится - выведите 'true'.
   */
  function checkNumberTask() {

    var number = 31;
    var i;
    var flag = false;
    for (i = 2; i < number; i++) {
      if (number % i === 0) {
        flag = true;
        break;
      }
    }
    if (flag === true) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  window.task2 = checkNumberTask;
}());
