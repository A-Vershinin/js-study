/*
 Узнайте ширину и высоту первого, второго и третьего дивов <div> (по очереди)
 непосредственно внутри #container с учетом padding и border и с учетом padding, border и margin
*/
function customFunctionTask34() {
  function customFunction() {
    $("#container").children(":lt(3)").each(function() {
      const width = $(this).outerWidth();
      const height = $(this).outerHeight();
      console.log("Размеры с учетом padding и border");
      console.log("Ширина: " + width + " Высота: " + height);
      console.log("---------------------------------------------");
      const widthM = $(this).outerWidth(true);
      const heightM = $(this).outerHeight(true);
      console.log("Размеры с учетом padding и border и margin");
      console.log("Ширина: " + widthM + " Высота: " + heightM);
    });
  }
  customFunction();
}

export default customFunctionTask34;
