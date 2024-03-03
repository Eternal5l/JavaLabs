//1. Створіть клас для автомобіля з такими властивостями, як марка, модель і рік випуску.
//Потім створіть екземпляр автомобіля та встановіть його властивості.Виконайте дане завдання:
//• З використанням функції конструктора

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car("Toyota", "Camry", 2020);

console.log(car1.make, car1.model, car1.year); // Toyota Camry 2020


//• З використанням синтаксису класс

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

const car2 = new Car("BMW", "M3", 2023);

console.log(car2.make, car2.model, car2.year); // BMW M3 2023



//2. Створіть два екземпляри даного класу користуючись методом Object.create()

const car3 = Object.create(Car.prototype);
car3.make = "Honda";
car3.model = "Civic";
car3.year = 2018;

const car4 = Object.create(Car.prototype);
car4.make = "Ford";
car4.model = "Mustang";
car4.year = 2022;

console.log(car3.make, car3.model, car3.year); // Honda Civic 2018
console.log(car4.make, car4.model, car4.year); // Ford Mustang 2022


//3. Створіть класс персона який містить поля імя, прізвище, рік народження.Створіть даний клас не використовуючи class синтаксис. Додайте в даний клас методи які виводитимуть
//вік та повне імя особи.

function Person(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;

    this.getAge = function () {
        return new Date().getFullYear() - this.birthYear;
    };

    this.getFullName = function () {
        return `${this.name} ${this.surname}`;
    };
}

const person1 = new Person("Олексій", "Полішевський", 2003);

console.log(person1.getAge()); // 20
console.log(person1.getFullName()); // Полішевський Олексій


//4. Створіть субкласс класу персона який міститиме поле посада тп перевизначає метод
//виведення повного імені додаючи туди посаду особи.

function Employee(name, surname, birthYear, position) {
    Person.call(this, name, surname, birthYear);

    this.position = position;

    this.getFullName = function () {
        return `${Person.prototype.getFullName.call(this)} (${this.position})`;
    };
}

Employee.prototype = Object.create(Person.prototype);

const employee1 = new Employee("Тарас", "Шевченко", 1984, "письменник");

console.log(employee1.getAge()); // 39
console.log(employee1.getFullName()); // Тарас Шевченко (письменник)


//5. Напишіть метод який приймає два обєкти та визначає чи вони обєкти одног класу та
//виводить в консоль фразу з іменами класів обєктів


function areObjectsOfSameClass(obj1, obj2) {
    return obj1.constructor === obj2.constructor;
}

const person2 = new Person("Марія", "Іванова", 2000);
const car5 = new Car("Audi", "A8", 2021);

console.log(areObjectsOfSameClass(person2, car5)); // false
console.log(areObjectsOfSameClass(person1, employee1)); // true


//6. Створіть метод який приймає екземпляр класу Person та перетворює його у екземпляр
//ObservedPerson.Екземпляр ObservedPerson має вести себе аналогічно до класу Person та
//при виклику його методів буде виводити в консоль кількість викликів.


function toObservedPerson(person) {
    const observedPerson = new ObservedPerson(person);
    observedPerson.getAge = function () {
        const originalAge = person.getAge();
        console.log(`Кількість викликів: ${observedPerson.callCount}`);
        return originalAge;
    };
    observedPerson.getFullName = function () {
        const originalFullName = person.getFullName();
        console.log(`Кількість викликів: ${observedPerson.callCount}`);
        return originalFullName;
    };
    return observedPerson;
}

const person3 = new Person("Анна", "Сидоренко", 1995);
const observedPerson1 = toObservedPerson(person3);

console.log(observedPerson1.getAge()); // 28
console.log(observedPerson1.getFullName()); // Анна Сидоренко

console.log(observedPerson1.callCount); // 2


//7. Створіть абстрактний клас під назвою Shape, який визначає методи для обчислення площі
//та периметра.Змусьте дочірні класи імплементувати ці методи.



abstract class Shape {
    constructor(protected readonly type: string) {
        if (this.constructor === Shape) {
            throw new Error('Shape is an abstract class and cannot be instantiated directly.');
        }
    }

    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;

    toString(): string {
        return `Тип фігури: ${this.type}`;
    }
}

class Square extends Shape {
    constructor(private sideLength: number) {
        super('Квадрат');
    }

    calculateArea(): number {
        return this.sideLength * this.sideLength;
    }

    calculatePerimeter(): number {
        return 4 * this.sideLength;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super('Коло');
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const square = new Square(5);
const circle = new Circle(3);

console.log(square.toString()); // Тип фігури: Квадрат
console.log(`Площа квадрата: ${square.calculateArea()}`); // 25
console.log(`Периметр квадрата: ${square.calculatePerimeter()}`); // 20

console.log(circle.toString()); // Тип фігури: Коло
console.log(`Площа кола: ${circle.calculateArea()}`); // 28.274333882308138
console.log(`Периметр кола: ${circle.calculatePerimeter()}`); // 18.84955592153876


//8. Створіть масив фігур, що включає екземпляри кожного класу фігур.Перегляньте масив і
//викличте методи площі та периметра для кожної фігури



class Square extends Shape {
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }

    calculateArea() {
        return this.sideLength * this.sideLength;
    }

    calculatePerimeter() {
        return 4 * this.sideLength;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

const shapes = [new Square(5), new Circle(3), new Square(10)];