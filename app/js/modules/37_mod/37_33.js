/*
     Сделайте неотмеченным последний чекбокс на странице
*/
function customFunctionTask33() {
  function customFunction() {
    $("input[type='checkbox']:last").prop("checked", false);
  }
  customFunction();
}

export default customFunctionTask33;
