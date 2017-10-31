/*
 Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может
 выполнять с ним различные операции. Класс должен работать следующим образом:
 var elem = new Elem('селектор');

 elem.html('!'); //запишет в текст элемента '!'
 elem.append('!'); //запишет в начало элемента '!'
 elem.prepend('!'); //запишет в конец элемента '!'
 elem.attr('class', 'www'); //запишет в атрибут class значение www

 //Должны работать цепочки методов:
 elem.html('hello').append('!').prepend('!');
 elem.attr('class', 'www').attr('title', 'hello');
 */
function customFunctionTask1() {
  function customFunction() {
    class Elem {
      constructor(selector) {
        this.elem = document.querySelector(selector);
      }
      html(text) {
        this.elem.innerHTML = text;
        return this;
      }
      append(value) {
        this.elem.innerHTML += value;
        return this;
      }
      prepend(value) {
        this.elem.insertAdjacentHTML("afterBegin", value);
        return this;
      }
      attr(name, value) {
        this.elem.setAttribute(name, value);
        return this;
      }
    }

    const elem1 = new Elem("#btn-list");
    elem1.html("Супер большая кнопка");
    elem1.attr("title", "Ай ай я распиздяй");
    elem1.append("!!!!");
    elem1.prepend("!!!");
    console.log("-------------------------------");
    const elem2 = new Elem("#link");
    elem2.html("Добавляю текст").attr("class", "some-text").append("||||").prepend("||||");
  }
  customFunction();
}

export default customFunctionTask1;

