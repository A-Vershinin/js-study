/*
 Дан массив, выведите его элементы последовательно на экран через итератор
*/
function customFunctionTask7() {
  function customFunction() {
    const arr = [12, 35, 40, 32];

    for (let value of arr) {
      console.log(value);
    }
  }
  customFunction();
}

export default customFunctionTask7;
