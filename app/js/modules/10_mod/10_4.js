;(function () {

	/*
	 Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке
	 */
	function getDayOfWeek(param) {
		var arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
		return console.log(arr[param - 1]);
	}

	// getDayOfWeek(2);
	window.task4 = getDayOfWeek;
}());
