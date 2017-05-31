
function test() {
  var btn = document.querySelector("#btn");
  var ccc = "Hello";
  btn.addEventListener("click", function () {
    alert(this.value + ccc);
  });
}
// test();

function test2() {
  var btn = document.querySelector("#btn");
  var ccc = "Hello";
  btn.addEventListener("click", func1);
}
function func1() {
  var ccc;
  alert(this.value + ccc);
}
// test2();

/*  Задача 5
Сделайте функцию each, которая первым параметром принимает массив,
а вторым - функцию, которая применится к каждому элементу массива.
Функция each должна вернуть измененный массив.
*/
function task5() {
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
// task5();

/*  Задача 6
Сделайте функцию each, которая первым параметром принимает массив,
а вторым - массив функций, которые по очереди применятся к каждому
элементу массива: к первому элементу массива - первая функция, ко
второму - вторая и так далее пока функции в массиве не закончатся,
после этого возьмется первая функция, вторая и так далее по кругу.
*/

function task6() {
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
// task6();
