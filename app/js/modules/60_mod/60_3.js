/*
 Дано поле и функция
 function func(surname, name) {
 alert(this.value + ', ' + surname + ' ' + name);
 }
 Выведите значение поля с помощью apply
 */
function customFunctionTask3() {
  function customFunction() {
    const elem = document.getElementById("btn1");
    elem.value = "Привет";

    function btnFunc(surname, name) {
      console.log(this.value + ", " + surname + " " + name);
    }
    btnFunc.apply(elem, ["Коля", "Алкаш"]);
  }
  customFunction();
}

export default customFunctionTask3;

