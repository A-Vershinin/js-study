;(function () {
  /*
	Дан массив с числами. Найдите сумму этих чисел.
	*/

  function calculate() {
    var arr = [10, 14, 16, 8];
    var sum = 0;
    arr.forEach(function (num) {
      return sum += num;
    });
    console.log(sum);
  };
  window.task2 = calculate;
}());
