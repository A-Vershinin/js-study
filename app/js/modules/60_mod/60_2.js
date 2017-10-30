/*
 Дано поле и функция
 function func(surname, name) {
 alert(this.value + ', ' + surname + ' ' + name);
 }
 Выведите значение поля с помощью call
 */
function customFunctionTask2() {
  function customFunction() {
    const elem = document.getElementById("btn1");
    elem.value = "Привет";

    function btnFunc(surname, name) {
      console.log(this.value + ", " + surname + " " + name);
    }
    btnFunc.call(elem, "Пупкин", "Вася");
  }
  customFunction();
}

export default customFunctionTask2;

