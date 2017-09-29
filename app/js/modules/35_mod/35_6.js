/*
 Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
 Запишите соответствующие значения в переменные name, surname и age. Сделайте
 так, чтобы, если какое-то значение не задано - оно принимало следующее значение
 по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}
*/
function customFunctionTask6() {
  function customFunction() {
    const user = {};

    const { name = "Аноном", surname = "Анонимович", age = "? лет" } = user;
    console.log(name + " " + surname + " " + age);
  }
  customFunction();
}

export default customFunctionTask6;
