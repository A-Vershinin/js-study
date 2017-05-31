;(function() {

/*  Задача 6
Сделайте функцию each, которая первым параметром
принимает массив,а вторым - массив функций, которые
по очереди применятся к каждому элементу массива:
к первому элементу массива - первая функция, ко
второму - вторая и так далее пока функции в массиве
не закончатся, после этого возьмется первая функция,
 вторая и так далее по кругу.
*/

  function each6Task() {
  	var arr = [1, 2, 3];
  	var arr2 = [
  		function (number) {
  			return number * number;
  		},
  		function (number) {
  			return number * number * number;
  		},
  		function (number) {
  			return (number * number * number) + 1;
  		},
  	]
  	function each(arr, arrFunc) {
  		var a = [];
      var i;
  		for (i = 0; i < arrFunc.length; i++) {
  			a.push(arrFunc[i](arr[i]));
  		}
  		return a;
  	}
  	console.log(each(arr, arr2));
  }

  window.task6 = each6Task;
}());
