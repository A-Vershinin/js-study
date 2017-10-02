/*
  каждый <h2> замените на его содержимое.
*/
function customFunctionTask12() {
  function customFunction() {
    $("h2").replaceWith($("h2").text());
  }
  customFunction();
}

export default customFunctionTask12;

