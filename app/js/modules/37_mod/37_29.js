/*
   Выведите последовательно value каждого инпута.
*/
function customFunctionTask29() {
  function customFunction() {
    const value = $("input").each(function() {
      console.log($(this).val());
    });
  }
  customFunction();
}

export default customFunctionTask29;
