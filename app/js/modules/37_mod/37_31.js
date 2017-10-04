/*
     В value всех инпутов находятся числа. Сделайте так,
     чтобы в них стали квадраты этих чисел
*/
function customFunctionTask31() {
  function customFunction() {
    const value = $("input").each(function() {
      const $elem = $(this);
      const value = $elem.val();
      if (Number(value)) {
        $elem.val(value * value);
      }
    });
  }
  customFunction();
}

export default customFunctionTask31;
