/*
 Реализуйте класс Student (Студент), который будет наследовать от класса User,
 подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь
 следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
 year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User),
 с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь
 метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется
 так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
 */
function customFunctionTask1() {
  function customFunction() {
    class User {
      constructor(name, surname) {
        this.name = name;
        this.surname = surname;
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
      getFullName(name, surname) {
        return `${this.getName()} ${this.getSurname()}`;
      }
    }

    class Student extends User {
      constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
      }
      getYear() {
        return this.year;
      }
      setYear(year) {
        this.year = year;
      }
      getCourse() {
        const date = new Date();
        const currentYear = date.getFullYear();
        return currentYear - this.getYear();
      }
    }
    const student1 = new Student("Вася", "Пупкин");
    console.log(student1.getFullName());
    student1.setYear(2);
    console.log(`Поступил на ${student1.getYear()}й курс `);
    console.log(`Год поступления ${student1.getCourse()}`);
  }
  customFunction();
}

export default customFunctionTask1;

