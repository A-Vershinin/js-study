;(function() {

/*
Дан массив с числами. Найдите сумму этих чисел.
*/
  function calculate() {
    var arr = [10, 14, 16, 8];
		var newArr = [];
		newArr = arr.map(function(num) {
			return num * num;
		});


    console.log(newArr);
  };

  window.task3 = calculate;

}());
