/*
 Реализация среднемесячных затрат за использование платных интернет сервисов. Бывают почасовые и
  фикс.оплата.
 Необходимо реазиловать абстрактный класс PaidServise со свойствами id, name, costs и методом
 calculateAverageMonthlyCosts. Так же реализуйте два класса, которые наследуются от
 абстрактного класса FixedMonthlyCostPaidServise и FixedHourlyCostPaidServise. Дочерные классы
 отличаются реализаци метода calculateAverageMonthlyCosts. Для сервиса с почасовой оплатой
 формула среднемесячные затраты = 30 * 24* costs. Для фиксрованной - среднемесячные затраты =
 costs.
 После реализации классов создать массив с экземплярами классов(атрибуты указаны в таком порядке
  id, name, costs).
 FixedHourlyCostPaidServise("servise1", "Google Orkut", 11)
 FixedHourlyCostPaidServise("servise2", "Google Voice", 9.4)
 FixedMonthlyCostPaidServise("servise5", "Youtube", 8064)
 FixedHourlyCostPaidServise("servise3", "Mandrill", 11.2)
 FixedHourlyCostPaidServise("servise7", "Google Building Maker", 5387)
 FixedMonthlyCostPaidServise("servise6", "LinkedIn", 6863)
 */
/*
 Реализовать три обработки этого массива. Пример для вывода
 1. Вывести id, name, среднемесячные затраты для всех элементов массива. Вывод должен быть
  упорядочен по убыванию среднемесячных затрат. При совпадении суммы, упорядочивать по названию
   сервиса а алфовитном порядке a-z.
 2. Вывести первые 5 значений свойства name упорядоченного списка в пункте (1)
 3. Вывести последние 3 значения свойства id из списка в пункте (1)
 4. Сравнить среднемесячные затраты между сервисами Youtube и Mandrill. Вывести сравнимые
  сервисы в порядке убывания затрат или два сервиса в строку через слеш (/) если затраты равны.

 Примеры вывода
 1. service3 / Mandrill / 8064
    service5 / Youtube / 8064
    service1 / Google Orkut / 7920
    servise6 / LinkedIn / 6863

 2. Mandrill
    Youtube
    Google Orkut
    LinkedIn
 3. servise2
    servise4
    servise7

 4. Mandrill / Youtube
 */
function customFunctionTask1() {
  function customFunction() {
    class PaidServise {
      constructor(id, name, costs) {
        this.id = String(id);
        this.name = String(name);
        this.costs = parseFloat(costs);
      }
      calculateAverageMonthlyCosts(costs) {
        return this.costs;
      }
    }
    class FixedMonthlyCostPaidServise extends PaidServise {
      constructor(id, name, costs) {
        super(id, name, costs);
      }
      calculateAverageMonthlyCosts(costs) {
        return this.costs;
      }
    }
    class FixedHourlyCostPaidServise extends PaidServise {
      constructor(id, name, costs) {
        super(id, name, costs);
      }
      calculateAverageMonthlyCosts(costs) {
        return Math.floor(30 * 24 * this.costs);
      }
    }
    const arrElems = [
      new FixedHourlyCostPaidServise("servise1", "Google Orkut", 11),
      new FixedHourlyCostPaidServise("servise2", "Google Voice", 9.4),
      new FixedMonthlyCostPaidServise("servise5", "Youtube", 8064),
      new FixedHourlyCostPaidServise("servise3", "Mandrill", 11.2),
      new FixedHourlyCostPaidServise("servise7", "Google Building Maker", 5387),
      new FixedMonthlyCostPaidServise("servise6", "LinkedIn", 6863),
    ];

    function calculateArr(arr) {
      arr.forEach(function (elem) {
        const newCost = elem.calculateAverageMonthlyCosts();
        elem.costs = newCost;
      });
      return arr;
    }
    function getSortCosts(arr) {
      return arr.sort((a, b) => b.costs - a.costs);
    }
    function getPrintFull(arr) {
      const data = getSortCosts(arr);
      return data.forEach(elem => console.log(elem.id + " / " + elem.name + " / " + elem.costs));
    }
    function getFirstFiveNames(arr) {
      const data = getSortCosts(arr);
      data.slice(0, 4).forEach(elem => console.log(elem.name));
      return data;
    }
    function getLastThreeId(arr) {
      const data = getSortCosts(arr);
      data.slice(-3).forEach(elem => console.log(elem.id));
      return data;
    }
    function getComparisonAverageCosts(arr) {
      const arrSort = getSortCosts(arr);
      let dataYou = null;
      let dataMandr = null;
      for (let i = 0; i < arrSort.length; i++) {
        if (arr[i].name === "Youtube") {
          dataYou = arr[i];
        }
        if (arr[i].name === "Mandrill") {
          dataMandr = arr[i];
        }
      }
      if (dataYou.costs >= dataMandr.costs) {
        console.log(dataYou.name + "\n" + dataMandr.name);
      }
      if (dataYou.costs === dataMandr.costs) {
        console.log(dataYou.name + " / " +  dataMandr.name);
      }
    }

    const arrWithCost = calculateArr(arrElems);
    const arrSortCost = getSortCosts(arrWithCost);
    console.log("----- Вывод 1 -----");
    getPrintFull(arrSortCost);
    console.log("----- Вывод 2 -----");
    getFirstFiveNames(arrWithCost);
    console.log("----- Вывод 3 -----");
    getLastThreeId(arrWithCost);
    console.log("----- Вывод 4 -----");
    getComparisonAverageCosts(arrWithCost);
  }
  customFunction();
}
export default customFunctionTask1;

