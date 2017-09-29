/*
	Дан массив. Запишите второй элемент этого массива в переменную elem2, третий - в
	переменную elem3. Если в массиве нет третьего элемента - запишите в переменную
	elem3 значение 'eee', а если нет второго - в переменную elem2 запишите значение
	'bbb'. Первый элемент никуда записывать не надо.
*/
function customFunctionTask4() {
  function customFunction() {
    const arr = [25, 12, 15, 40, 14, 32, 65, 23];

    const [, elem2 = "eee", elem3 = "bbb"] = arr;
    console.log(`Базовый массив ${arr} \nВторой элем. ${elem2} 
    \nТретий элем. значение по умолчанию ${elem3}`);
  }
  customFunction();
}

export default customFunctionTask4;
