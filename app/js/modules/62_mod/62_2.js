/*
 Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте
 все его свойства приватными, а для их чтения сделайте методы-геттеры.
 Поднимите зарплату первому работнику, второму увеличте количество дней и
 покажите результат.
 */
function customFunctionTask1() {
  function customFunction() {
    class Worker {
      constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
      }
      getName() {
        return this.name;
      }
      setName(name) {
        this.name = name;
      }
      getSurname() {
        return this.surname;
      }
      setSurname(surname) {
        this.surname = surname;
      }
      getRate() {
        return this.rate;
      }
      setRate(rate) {
        this.rate = rate;
      }
      getDays() {
        return this.days;
      }
      setDays(days) {
        this.days = days;
      }
      getSalary() {
        return this.getRate() * this.getDays();
      }
      showResults() {
        return console.log(`${this.getName()} ${this.getSurname()} заработал ${this.getSalary()}$`);
      }

    }
    const worker1 = new Worker("Иван", "Иванов", 10, 22);
    const worker2 = new Worker("Сергей", "Петров", 14, 18);
    worker1.showResults();
    worker2.showResults();
    const allSalary = worker1.getSalary() + worker2.getSalary();
    console.log(`Всего заработано ${allSalary}$`);
    console.log("--------------------------------");
    worker1.setRate(12);
    worker1.setDays(8);
    console.log(`${worker1.getName()}а повысили и он зарабатывает ${worker1.getRate()}$/ч`);
    worker2.setDays(25);
    console.log(`${worker2.getName()} больше работал и заработал ${worker2.getSalary()}$`);
  }
  customFunction();
}

export default customFunctionTask1;

