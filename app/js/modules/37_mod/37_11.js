/*
  Сделайте предыдущие два задания одновременно + окрасьте все <h2> в красный цвет.
*/
function customFunctionTask11() {
  function customFunction() {
    $("h2").prepend("!").append("?").css("color", "red");
  }
  customFunction();
}

export default customFunctionTask11;

