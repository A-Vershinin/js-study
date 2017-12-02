/*

 */
function customFunctionTask1() {
  function customFunction() {
    // функция позволяет правильно наследовать на прототипах
    function extend(Child, Parent) {
      const F = function() {};
      F.prototype = Parent.prototype;
      Child.prototype = new F();
      Child.prototype.constructor = Child;
      Child.superclass = Parent.prototype;
    }

    const Base = function () {
      const list = [];
      this.set = function (name, money) {
        list.push([name, money]);
      };
      this.get = function (key) {
        return list[key-1];
      };
      this.getter = function () {
        return list;
      }
    };

    const Temprorary = function () {
      Base.apply(this, arguments);
      let that = this;
      this.getSum = function (key) {
        let list = that.getter();
        let lastName = list[key-1][0];
        let money = list[key-1][1];
        return `Сотрудник - ${lastName} стреднемесячная зарплата = ${20.8*8*money} руб.`;
      };
    };

    const Standing = function () {
      Base.apply(this, arguments);
      let that = this;
      this.getSum = function (key) {
        let list = that.getter();
        let lastName = list[key-1][0];
        let money = list[key-1][1];
        return `Сотрудник - ${lastName} стреднемесячная зарплата = ${money} руб.`;
      };
    };

    extend(Temprorary, Base);
    extend(Standing, Base);

    const groupStandingWorker = new Standing();
    const groupTempWorker = new Temprorary();

    groupTempWorker.set("Ivanov", 100);
    groupTempWorker.set("Denisov", 300);
    const p1 = groupTempWorker.set(1);
    const checkG = groupTempWorker.getSum(1);

    groupTempWorker.set("Ivanov", 700);
    groupTempWorker.set("Denisov", 200);
    const t1 = groupTempWorker.set(1);
    const checkT = groupTempWorker.getSum(1);
    console.log(checkT);
  }
  customFunction();
}

export default customFunctionTask1;

