
  /*
	Функция ggg принимает 2 параметра: анонимную
	функцию, которая возвращает 3 и анонимную функцию,
	 которая возвращает 4. Верните результатом
	 функции ggg сумму 3 и 4.
	*/

  function showC() {
    function ggg(func1, func2) {
      return func1() + func2();
    }
    console.log(ggg(
      () => 3,
      () => 4,
    ));
  }
  export default showC;

