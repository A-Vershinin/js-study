;(function () {

  // Описание всех тасков внутри
  // На работу с функциями
  // task1();
  // task2();
  // task3();
  // task4();
  // task5();
  // task6();
  // На замыкания
  // task7();
  // task8();
  // task9();
  // task11();
  // task13();
  // task14();
  // task15();
  // task16();
}());

function test() {
  var btn = document.querySelector("#btn");
  var ccc = "Hello";
  btn.addEventListener("click", function () {
    alert(this.value + ccc);
  });
}

// test();
function test2() {
  var btn = document.querySelector("#btn");
  var ccc = "Hello";
  btn.addEventListener("click", func1);
}

function func1() {
  var ccc;
  alert(this.value + ccc);
}

