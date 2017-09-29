/*
  Дан объект с настройками, например, {id: 'elem', color: 'blue', border: '1px solid red',
  font: '15px Arial'}. Сделайте функцию, которая получает этот объект, извлекает
  из него все настройки в соответствующие переменные и для элемента с указанным
  id (в нашем случае это 'elem') ставит заданные CSS свойства. В объекте могут
  быть только эти ключи, однако, какой-либо ключ (кроме id) может быть не задан -
  в этом случае пусть возьмутся следующие значения по умолчанию: color: 'blue',
  border: '1px solid red', font: '15px Arial'.
*/
function customFunctionTask12() {
  function customFunction() {
    const params = {
      id: "link",
      // color: "blue",
      // border: "1px solid red",
      // font: "16px Arial",
    };

    function getSettings({ id, color = "blue", border = "1px solid gray", font = "14px Arial" }) {
      const elem = document.getElementById(id);

      const str = "color:" + color + "; border:" + border + "; font:" + font;
      elem.style.cssText = str;
    }
    getSettings(params);
  }
  customFunction();
}

export default customFunctionTask12;
