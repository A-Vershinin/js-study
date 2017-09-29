 /*
  Дан массив. Запишите последний элемент этого массива в переменную elem1, а
  предпоследний - в переменную elem2
  */
  function customFunctionTask2() {
    function customFunction() {
      const arr = [25, 12, 32, 40, 14, 32, 65, 23];

      console.log(`Базовый массив ${arr}`);

      arr.reverse();
      const [elem1, elem2, ...args] = arr;

      console.log(`Последний элем. ${elem1}, 
      предпоследний элем. ${elem2},
      остаток ${args}`);
    }
    customFunction();
  }

  export default customFunctionTask2;

