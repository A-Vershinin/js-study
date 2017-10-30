/*
 Дана кнопка. Напишите функцию, которая выводит текст кнопки с помощью call
 */
function customFunctionTask1() {
  function customFunction() {
    const elem = document.getElementById("btn1");

    function btnFunc() {
      console.log(this.value);
    }

    btnFunc.call(elem);
  }
  customFunction();
}

export default customFunctionTask1;

