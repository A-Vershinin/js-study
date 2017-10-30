/*
 Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname
 (фамилия), rate (ставка за день работы), days (количество отработанных дней). Класс должен
 иметь метод getSalary(), который будет считать зарплату работника. Зарплата - это произведение
 (умножение) ставки rate на количество отработанных дней days. И метод showResults, который
  показывается результаты работника.
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

      getSalary() {
       return this.rate * this.days;
      }
      showResults() {
        return console.log(`${this.name} ${this.surname} заработал ${this.getSalary()}$`);
      }
    }
    const worker1 = new Worker("Иван", "Иванов", 10, 21);
    const worker2 = new Worker("Сергей", "Петров", 14, 18);
    worker1.showResults();
    worker2.showResults();
    const allSalary = worker1.getSalary() + worker2.getSalary();
    console.log(`Всего заработано ${allSalary}$`);
  }
  customFunction();
}

export default customFunctionTask1;

