/*
  Загрузите 3-5 картинок на страницу последовательно одну за другой используйте Promise
 */
function customFunctionTask1() {
  function customFunction() {

  const url1 = "http://mirpozitiva.ru/uploads/posts/2016-08/1472058061_04.jpg";
  const url2 = "http://mirpozitiva.ru/uploads/posts/2016-08/1472058050_2.jpg";
  const url3 = "http://mirpozitiva.ru/uploads/posts/2016-08/1472058034_06.jpg";

  const cont = document.querySelector(".container");
  const list = document.querySelector(".list");

  const img = new Image();
  img.src = url1;
  img.height = 150;

 function loadImages(url) {
   return new Promise((resolve, reject) => {
     const img = new Image();
     img.src = url;
     img.height = 150;
     cont.insertBefore(img, list);
     img.addEventListener("load", () => {
       resolve();
     });
     img.addEventListener("error", () => {
       reject();
     });
   });
 }

 loadImages(url1)
   .then(() => loadImages(url2))
   .then(() => loadImages(url1))
   .then(() => loadImages(url3))
   // кетч выполняется когда в каждом из элементов(then) цепочки нету
   // второй функции обработки ошибок
   // есть какой-то элемент цепи (then) выполняется не resolve, а reject,
   // то сразу же заходим в кетч для обработки ошибки и остальная цепль
   // уже не выполняется
   .catch(() => console.log("Ошибка. Зашли в кетч"));

  }
  customFunction();
}

export default customFunctionTask1;

