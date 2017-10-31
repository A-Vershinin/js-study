/*
 Дан массив слов, нужно преобразовать их в массив, который будет
 содержать длину каждого слова.
 */

function customFunctionTask16() {
  function customFunction() {
    const animals = ["кот", "собака", "рыба", "попугай", "крыса"];
    // простой вариант

    // const calculateSymbols = animals.map(function(elem) {
    //   return elem.length;
    // });

    // сокращнный
    const calculateSymbols = animals.map(elem => elem.length);
    console.log(calculateSymbols);
  }
  customFunction();
}
export default customFunctionTask16;

