
  /*
	Если переменная a больше нуля - то в ggg
	запишем функцию, которая выводит один !,
	иначе запишем функцию, которая выводит два !.
	*/

  function showB() {
    function ggg(number, func1) {
      return func1(number) * func1(number);
    }
    console.log(ggg(2, function (num) {
      return num * num;
    }));
  }
  export default showB;

