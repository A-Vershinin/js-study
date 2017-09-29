import task1 from "../32_mod/32_1";
import task2 from "../32_mod/32_2";
import task3 from "../32_mod/32_3";
import task4 from "../32_mod/32_4";
import task5 from "../32_mod/32_5";
import task6 from "../32_mod/32_6";
import task7 from "../32_mod/32_7";
import task8 from "../32_mod/32_8";
import task9 from "../32_mod/32_9";
import task11 from "../32_mod/32_11";
import task13 from "../32_mod/32_13";
import task14 from "../32_mod/32_14";
import task15 from "../32_mod/32_15";
import task16 from "../32_mod/32_16";

  // Описание всех тасков внутри
  // На работу с функциями
const mod32 = {
  task1,
  task2,
  task3,
  task4,
  task5,
  task6,
  // На замыкания
  task7,
  task8,
  task9,
  task11,
  task13,
  task14,
  task15,
  task16,
};

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

export default mod32;
