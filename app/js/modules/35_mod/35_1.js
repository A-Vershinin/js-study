  /*
    Дан массив. Запишите первый элемент этого массива в переменную elem1, второй -
    в переменную elem2, третий - в переменную elem3, а все остальные элементы массива
    - в переменную arr.
  */
  function customFunctionTask1() {
    function customFunction() {
      const arr = [25, 12, 32, 40, 14, 32, 65, 23];

      const [elem1, elem2, elem3, ...args] = arr;
      console.log(elem1, elem2, elem3, args);
    }
    customFunction();
  }

  export default customFunctionTask1;
