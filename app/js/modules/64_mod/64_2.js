/*
 Модифицируйте класс Elem из предыдущей задачи так, чтобы он мог работать не только с одним
 элементом, но и одновременно с группой, как это сделано в jQuery. Кроме того: реализуйте еще и
 метод each, который будет работать также, как и each из jQuery.
 */
function customFunctionTask1() {
  function customFunction() {
    class Elem {
      constructor(selector) {
        this.elem = document.querySelectorAll(selector);
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
      each(callback) {
        this.elem.forEach(callback);
        return this;
      }
    }
    const elems = new Elem(".link");
    elems.each(function(elem) {
      elem.innerHTML += "!!!";
    });
  }

  customFunction();
}
export default customFunctionTask1;

