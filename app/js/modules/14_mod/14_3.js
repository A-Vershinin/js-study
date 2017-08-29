(function () {
  /*
  Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром
  функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в
  массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
  */
  function getArrTask3() {
    function arrayFill(str, number) {
      var i;
      var arr = [];

      for (i = 1; i <= number; i++) {
        arr.push(str);
      }
      return arr;
    }
    console.log(arrayFill("x", 5));
  }

  window.task3 = getArrTask3;
}());
