/*
  Сделайте функцию, которая получает имя пользователя и выводит на экран
  'Привет, Имя' (вместо Имя - полученное параметром имя). По умолчанию
  (то есть если не передать параметр) функция должна выводить 'Привет, Аноним'
*/
function customFunctionTask11() {
  function customFunction() {
    const name = "Вася";

    function getFullName(name = "Аноним") {
      return `Привет, ${name}`;
    }

    console.log(getFullName());
  }
  customFunction();
}

export default customFunctionTask11;
