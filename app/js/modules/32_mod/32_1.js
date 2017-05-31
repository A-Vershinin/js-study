;(function() {

/*
Если переменная a больше нуля - то в ggg
запишем функцию, которая выводит один !,
иначе запишем функцию, которая выводит два !.
*/
  function showA() {

    function total(a) {
      if (a > 0) {
        var ggg = function() {
          console.log("!");
        }
      } else {
        var ggg = function() {
          console.log("!!");
        }
      }
      ggg();
    };
    total(2);
    total(-2);
  };

  window.task1 = showA;

}());
