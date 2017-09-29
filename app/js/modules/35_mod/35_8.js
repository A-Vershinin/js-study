/*
  Дан массив, выведите его элементы последовательно на экран в обратном порядке
  (подсказка: сначала перевернем массив через reverse)
*/
function customFunctionTask8() {
  function customFunction() {
    const arr = [12, 35, 40, 32];

    arr.reverse();
    for (let value of arr) {
      console.log(value);
    }
  }
  customFunction();
}

export default customFunctionTask8;
