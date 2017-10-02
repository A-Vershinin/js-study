/*
  Дана JSON строка '["Коля", "Вася", "Петя"]'. Преобразуйте ее в массив JavaScript и выведите на
  экран элемент "Петя".
*/
function customFunctionTask1() {
  function customFunction() {
    let name = '["Коля", "Вася", "Петя"]';

    name = JSON.parse(name);
    console.log(name[2]);
  }
  customFunction();
}

export default customFunctionTask1;

