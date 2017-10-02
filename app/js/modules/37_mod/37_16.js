/*
  Получите атрибут href ссылки из класса link.
*/
function customFunctionTask16() {
  function customFunction() {
    const elem = $("a.link ").attr("href");
    console.log(elem);
  }
  customFunction();
}

export default customFunctionTask16;

