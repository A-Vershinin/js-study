/*
 Дано поле и функция
 function func(surname, name) {
  console.log(this.value + ', ' + surname + ' ' + name);
 }
 //Тут напишите конструкцию с bind()

 func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
 func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'
 */
function customFunctionTask4() {
  function customFunction() {
    const elem = document.getElementById("btn1");
    elem.value = "Привет";

    function btnFunc(surname, name) {
      console.log(this.value + ", " + surname + " " + name);
    }
    const func = btnFunc.bind(elem);
    func("Иванов", "Иван");
    func("Петров", "Петр");
  }
  customFunction();
}

export default customFunctionTask4;

