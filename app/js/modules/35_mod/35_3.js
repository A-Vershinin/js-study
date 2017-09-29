  /*
    Дан массив. Запишите второй элемент этого массива в переменную elem2.
    Первый элемент никуда записывать не надо.
  */
function customFunctionTask3() {
  function customFunction() {
    const arr = [25, 12, 32, 40, 14, 32, 65, 23];

    const [, elem2] = arr;
    console.log(`Базовый массив ${arr} \nВторой элем. ${elem2}`);
  }
  customFunction();
}

export default customFunctionTask3;

