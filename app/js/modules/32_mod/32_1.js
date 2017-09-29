
  /*
	Если переменная a больше нуля - то в ggg
	запишем функцию, которая выводит один !,
	иначе запишем функцию, которая выводит два !.
	*/
  function showA() {
    function total(a) {
      var ggg;

      if (a > 0) {
        ggg = function () {
          console.log("!");
        };
      } else {
        ggg = function () {
          console.log("!!");
        };
      }
      ggg();
    }
    total(2);
    total(-2);
  }
  export default showA;

