/*
  Получите атрибут href первой ссылки.
*/
function customFunctionTask17() {
  function customFunction() {
    const elem = $(".link:first ").attr("href");
    console.log(elem);
  }
  customFunction();
}

export default customFunctionTask17;

