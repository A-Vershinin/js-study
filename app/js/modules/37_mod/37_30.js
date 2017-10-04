/*
    Установите value всех инпутов в '!'.
*/
function customFunctionTask30() {
  function customFunction() {
    const value = $("input").each(function() {
      $(this).val("!");
    });
  }
  customFunction();
}

export default customFunctionTask30;
