/*
   Дан объект {a: 'aaa', b: 'bbb'}. Преобразуйте его в JSON.
*/
function customFunctionTask2() {
  function customFunction() {
    const obj = { a: "aaa", b: "bbb" };

    const result = JSON.stringify(obj);
    console.log(result);
  }
  customFunction();
}

export default customFunctionTask2;
