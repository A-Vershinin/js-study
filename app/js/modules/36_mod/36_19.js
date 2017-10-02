/*
  Сделайте родителя <li> с классом list (li с этим классом, а не родитель) синего цвета
*/
function customFunctionTask19() {
  function customFunction() {
    $("li.list").parent().css("color", "blue");
    console.log($("li.list"));
  }
  customFunction();
}

export default customFunctionTask19;

