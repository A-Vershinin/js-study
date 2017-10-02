/*
  Получите и покрасьте в синий цвет следующие элементы:
   - Все <p>, которые содержат текст 'Lorem'
*/
function customFunctionTask9() {
  function customFunction() {
    $("p:contains('Lorem')").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask9;

