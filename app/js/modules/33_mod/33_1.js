;(function () {
  /*
	Дан массив с числами. Создайте новый массив, состоящий
	из квадратов этих чисел.
	*/
  function calculate() {
    var arr = [10, 14, 16, 8];
    var newArr = [];
    newArr = arr.forEach(function (num) {
      return num * num;
    });
    console.log(arr);
  };
  window.task1 = calculate;
}());
