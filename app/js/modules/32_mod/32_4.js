
  /*
  Дана функция ggg. Она требует первым параметром число,
  вторым функцию, которая возводит в квадрат, а третьим
  параметром функцию, которая возводит в куб. Эти функции
  есть как Function Declaration - kvadrat, kub. Пусть функция
  ggg вернет сумму квадрата и куба числа.
  */

  function gggSumaKvadrataKub() {
    function ggg(number, func1, func2) {
      return func1(number) + func2(number);
    }

    console.log(ggg(2, number => number * number,
      number => number * number * number),
    );
  }
  export default gggSumaKvadrataKub;

