;(function () {
  /*  Задача 5
	Сделайте функцию each, которая первым параметром
	принимает массив, а вторым - функцию, которая
	применится к каждому элементу массива.
	Функция each должна вернуть измененный массив.
	*/

  function each5Task() {
    var arr = [1, 2, 3];

    function each(arr, func1) {
      var rezult = [];
      var i;
      for (i = 0; i < arr.length; i++) {
        rezult.push(func1(arr[i]));
      }
      return rezult;
    }

    console.log(each(arr, function (number) {
      return number + 1;
    }));
    console.log(each(arr, function (number) {
      return number * number;
    }));
  }

  window.task5 = each5Task;
}());
