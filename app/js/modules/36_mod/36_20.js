/*
  Выведите в консоль содержимое всех абзацев <p> (по очереди)
*/
function customFunctionTask20() {
  function customFunction() {
    // $("p").each(function(elem) {
    //   console.log(elem);
    // });

    $("p").each(elem => console.log(elem));
  }
  customFunction();
}

export default customFunctionTask20;

