/*
 Дан класс User, который выводит имя и фамилию пользователя. Создайте и наслудйте класс Student
 от User. Свойства базовая стипендия-ставка (задана по умолчанию), средний бал (может быть от 2
 до 5). Имеет метод, который показывает какую стипендию должен получить студент. Расчёт базовая
 ставка * коэфициент. Значение коэфициента расчитывается от среднего бала. Если бал 2-3, коф.
 равен 1. Если 3-4 то равен 1.2. Если от 4-5. то 1.5. Если 5 балов коф. равен 2. Класс имеет
 вспомогательный метод getKoeff(средний был )
 */
function customFunctionTask1() {
  function customFunction() {
    class User {
      constructor(name, surname) {
        this.name = name;
        this.surname = surname;
      }

      getFullName(name, surname) {
        return `${this.name}  ${this.surname}`;
      }
    }
    class Student extends User {
      constructor(name, surname, averageScore) {
        super(name, surname);
        this.rate = 125;
        this.averageScore = parseFloat(averageScore);
      }
      getKoeff(averageScore) {
        if (this.averageScore >= 2 && this.thisaverageScore <= 3) return 1;
        if (this.averageScore >= 3 && this.averageScore <= 4) return 1.2;
        if (this.averageScore >= 4 && this.averageScore <= 5) return 1.5;
        if (this.averageScore === 5) return 2;
      }
      getSalary(rate) {
        return Math.floor(this.rate * this.getKoeff());
      }
    }
    const stud1 = new Student("Вася", "Пупкин", 3.7);
    const stud2 = new Student("Петя", "Порошенко", 4.2);
    console.log(stud1.getFullName());
    console.log(stud1.getSalary());
    console.log(stud2.getSalary());
  }
  customFunction();
}
export default customFunctionTask1;

