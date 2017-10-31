/*
 Реализуйте класс Rectangle, о котором я рассказываю в видео в теоретической части урока.
 У него должны быть следующие свойства: ширина width, высота height. Также у него должны быть
 следующие методы: получить ширину getWidth, установить ширину setWidth, получить высоту
 getHeight, установить высоту setHeight.
 */
function customFunctionTask1() {
  function customFunction() {
    class Rectangle {
      constructor(width, height, color) {
        this.elem = document.createElement("div");
        this.setWidth(width);
        this.setHeight(height);
        this.setBorderColor(color);
        this.elem.style.borderWidth = "1px";
        this.elem.style.borderStyle = "solid";
      }
      getWidth() {
        return parseInt(this.elem.style.width);
      }
      setWidth(width) {
        this.elem.style.width = width + "px";
      }
      setHeight(height) {
        this.elem.style.height = height + "px";
      }
      getHeight() {
        return parseInt(this.elem.style.height);
      }
      setBorderColor(color) {
        this.elem.style.borderColor = color;
      }
      append() {
        return document.querySelector(".container").appendChild(this.elem);
      }
    }
    const rec1 = new Rectangle("100", "50", "red");
    rec1.append();
    const rec2 = new Rectangle();
    rec2.setWidth("300");
    rec2.setHeight("150");
    rec2.setBorderColor("blue");
    rec2.append();
    console.log(`Высота ${rec1.getWidth()}, ширина ${rec1.getHeight()}`);
  }

  customFunction();
}
export default customFunctionTask1;

