/*
  Получите и покрасьте в синий цвет следующие элементы:
   - Все <li> больше 5-той (отсчет с нуля в jQuery!)
*/
function customFunctionTask13() {
  function customFunction() {
    $(".list li:gt(5)").css("color", "blue");
  }
  customFunction();
}

export default customFunctionTask13;

