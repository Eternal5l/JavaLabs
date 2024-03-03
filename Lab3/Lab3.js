//1. Створіть функцію average, яка знаходить середнє значення із довільного числа аргументів, використайте spread … оператор.

function average(...args) {
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum / args.length;
}

// Приклад використання
const numbers = [1, 2, 3, 4, 5];
const averageValue = average(...numbers);
console.log("Середнє значення:", averageValue); // 3



//2. Створіть функцію values(f, low, high), яка повертає масив значень[f(low), f(low + 1), ..., f(high)].

function values(f, low, high) {
    const result = [];
    for (let i = low; i <= high; i++) {
        result.push(f(i));
    }
    return result;
}

// Приклад використання
const f = (x) => x * x;
const valuesArray = values(f, 1, 5);
console.log("Масив значень:", valuesArray); // [1, 4, 9, 16, 25]

//3. Своріть функцію callWithContext як приймає обєкт та функцію коллбек яка викликається з контекстом пережаного обєкта.Викличте цю функцію з обєктом person з полями імя та вік
//та функцією яка виведе в консоль ‘Today is ${ date } !Happy birthday ${ name }.

function callWithContext(obj, callback) {
    callback.call(obj);
}

const person = {
    name: "John",
    age: 30,
};

const birthdayCallback = function () {
    const date = new Date().toLocaleDateString();
    console.log(`Today is ${date}! Happy birthday ${this.name}.`);
};

callWithContext(person, birthdayCallback); // Today is 2024-03-01! Happy birthday John.



//4. Створіть функцію, яка повертає об’єкт з двома методами: increment і getValue.Метод 
//increment має збільшувати значення, яке зберігається в замиканні, а метод getValue має повертати поточне значення. 

function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
        },
        getValue() {
            return count;
        },
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log("Поточне значення:", counter.getValue()); // 2


//5. Створіть функцію getGreeting яка приймає імя та повертає текстовий фрагмент типу ‘Hello
//name’. Зробіть щоб функція зберігала значення останнього виклику та якщо аикликана знову з таким же аргументом – повертала кешовне значення.

function getGreeting(name) {
    let cachedGreeting;
    return function () {
        if (!cachedGreeting) {
            cachedGreeting = `Hello ${name}`;
        }
        return cachedGreeting;
    };
}

const greeting = getGreeting("John");
console.log(greeting()); // Hello John
console.log(greeting()); // Hello John

const greeting2 = getGreeting("Jane");
console.log(greeting2()); // Hello Jane


//6. Створіть функцію, яка приймає число як аргумент і повертає функцію, яка приймає інше 
//число як аргумент і повертає суму двох чисел.Перевірте функцію, викликавши її з різними номерами.

function add(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = add(5);
console.log(add5(2)); // 7

const add10 = add(10);
console.log(add10(3)); // 13

//7. Створіть функцію, яка приймає масив текстових фрагментів як аргумент і повертає нову
//функцію, яка приймає текстовий фрагмент як аргумент і повертає логічне значення, яке вказує, чи існує текстовий фрагмент у вихідному масиві. 

function hasItem(items) {
    return function (item) {
        return items.includes(item);
    };
}

const fruits = ["apple", "banana", "orange"];
const hasFruit = hasItem(fruits);
console.log(hasFruit("apple")); // true
console.log(hasFruit("kiwi")); // false

//8. Створіть функцію, яка приймає масив об’єктів як аргумент і повертає новий масив об’єктів, де певна властивість написана з великої літери.Використовуйте стрілочну функцію.

function capitalizeProperty(objects) {
    return objects.map((obj) => {
        const newObj = { ...obj };
        newObj.name = newObj.name.charAt(0).toUpperCase() + newObj.name.slice(1);
        return newObj;
    });
}

const people = [{ name: "john" }, { name: "jane" }];
const capitalizedPeople = capitalizeProperty(people);
console.log(capitalizedPeople); // [{name: "John"}, {name: "Jane"}]


//9. Напишіть приклад для демонстрації функцій call, apply, bind.

const person = {
    name: "John",
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

const anotherPerson = {
    name: "Jane",
};

// call
person.sayHello.call(anotherPerson); // Hello, my name is Jane

// apply
person.sayHello.apply(anotherPerson); // Hello, my name is Jane

// bind
const sayHelloBound = person.sayHello.bind(anotherPerson);
sayHelloBound(); // Hello, my name is Jane (зберігає контекст anotherPerson)

// Приклад з `bind` для обробки події
const button = document.getElementById("myButton");
button.addEventListener("click", person.sayHello.bind(person)); // При кліку використовує контекст person




//10. Створіть функцію яка приймає коллбек – викликає його з переданими аргументами та виводить в консоль імя функції, аргументи та час коли функція викликана.

function logCall(fn, ...args) {
    const timestamp = new Date().toLocaleString();
    console.log(`Function: ${fn.name}, Arguments: ${args}, Time: ${timestamp}`);
    return fn(...args);
}

function sum(x, y) {
    return x + y;
}

const result = logCall(sum, 5, 3); // Function: sum, Arguments: 5,3, Time: ...
console.log(result); // 8



//11. Створіть функцію яка кешує останній виклик на 10 секунд

function cacheWithTimeout(fn, timeout = 10000) { // 10 секунд за замовчуванням
    let cachedValue;
    let cachedTime;

    return function (...args) {
        const now = Date.now();
        if (!cachedValue || now - cachedTime > timeout) {
            cachedValue = fn(...args);
            cachedTime = now;
        }
        return cachedValue;
    };
}

function getDataFromAPI() {
    // Імітує отримання даних з API
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: "API response" }), 2000);
    });
}

const cachedData = cacheWithTimeout(getDataFromAPI);

cachedData()
    .then((data) => console.log(data)) // Перший виклик - отримає дані з API
    .then(() => cachedData())
    .then((data) => console.log(data)); // Другий виклик - отримає дані з кешу