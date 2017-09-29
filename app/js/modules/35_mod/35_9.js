/*
  Дан массив с числами, найдите сумму элементов этого массива.
*/
function customFunctionTask9() {
  function customFunction() {
    const arr = [12, 35, 40, 32];
    let sum = 0;

    for (let value of arr) {
      sum += value;
    }
    console.log(sum);
  }
  customFunction();
}

export default customFunctionTask9;
