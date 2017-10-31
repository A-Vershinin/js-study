/*
 Получить сумму количества символов во всех словах, которые содержатся в массиве animals
 */

function customFunctionTask17() {
  function customFunction() {
    const animals = ["кот", "собака", "рыба", "попугай", "крыса"];

    // простой вариант
    function getSumSymbols(arr) {
      let total = 0;
      let count = 0;
      let loops;
      let item;
      for (count, loops = animals.length; count < loops; count++) {
        item = animals[count];
        total += item.length;
      }
      console.log(total);
    }
    // getSumSymbols(animals);

    // простой с forEach
    // let total = 0;
    // animals.forEach(function(elem) {
    //   total += elem.length;
    // });

    // простой с reduce
    // const total = animals.reduce(function(sum, elem) {
    //   return sum + elem.length;
    // }, 0);

    // сокращнный
    const total = animals.reduce((sum, elem) => sum + elem.length, 0);

    console.log(total);
  }
  customFunction();
}
export default customFunctionTask17;

