/*
 Дан объект {name: "Петр", "surname": "Петров", "age": "20 лет"}.
 Запишите соответствующие значения в переменные name, surname и age
*/
function customFunctionTask5() {
  function customFunction() {
    const user = {
      name: "Петр",
      surname: "Петров",
      age: "20 лет",
    };

    const { name, surname, age } = user;
    console.log(name + " " + surname + " " + age);
  }
  customFunction();
}

export default customFunctionTask5;
