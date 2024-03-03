//1. ������� ������� average, ��� ��������� ������ �������� �� ��������� ����� ���������, ������������ spread � ��������.

function average(...args) {
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum / args.length;
}

// ������� ������������
const numbers = [1, 2, 3, 4, 5];
const averageValue = average(...numbers);
console.log("������ ��������:", averageValue); // 3



//2. ������� ������� values(f, low, high), ��� ������� ����� �������[f(low), f(low + 1), ..., f(high)].

function values(f, low, high) {
    const result = [];
    for (let i = low; i <= high; i++) {
        result.push(f(i));
    }
    return result;
}

// ������� ������������
const f = (x) => x * x;
const valuesArray = values(f, 1, 5);
console.log("����� �������:", valuesArray); // [1, 4, 9, 16, 25]

//3. ������ ������� callWithContext �� ������ ���� �� ������� ������� ��� ����������� � ���������� ���������� �����.�������� �� ������� � ������ person � ������ ��� �� ��
//�� �������� ��� ������ � ������� �Today is ${ date } !Happy birthday ${ name }.

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



//4. ������� �������, ��� ������� �ᒺ�� � ����� ��������: increment � getValue.����� 
//increment �� ���������� ��������, ��� ���������� � ��������, � ����� getValue �� ��������� ������� ��������. 

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
console.log("������� ��������:", counter.getValue()); // 2


//5. ������� ������� getGreeting ��� ������ ��� �� ������� ��������� �������� ���� �Hello
//name�. ������ ��� ������� �������� �������� ���������� ������� �� ���� ��������� ����� � ����� �� ���������� � ��������� ������� ��������.

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


//6. ������� �������, ��� ������ ����� �� �������� � ������� �������, ��� ������ ���� 
//����� �� �������� � ������� ���� ���� �����.�������� �������, ���������� �� � ������ ��������.

function add(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = add(5);
console.log(add5(2)); // 7

const add10 = add(10);
console.log(add10(3)); // 13

//7. ������� �������, ��� ������ ����� ��������� ��������� �� �������� � ������� ����
//�������, ��� ������ ��������� �������� �� �������� � ������� ������ ��������, ��� �����, �� ���� ��������� �������� � ��������� �����. 

function hasItem(items) {
    return function (item) {
        return items.includes(item);
    };
}

const fruits = ["apple", "banana", "orange"];
const hasFruit = hasItem(fruits);
console.log(hasFruit("apple")); // true
console.log(hasFruit("kiwi")); // false

//8. ������� �������, ��� ������ ����� �ᒺ��� �� �������� � ������� ����� ����� �ᒺ���, �� ����� ���������� �������� � ������ �����.�������������� �������� �������.

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


//9. �������� ������� ��� ������������ ������� call, apply, bind.

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
sayHelloBound(); // Hello, my name is Jane (������ �������� anotherPerson)

// ������� � `bind` ��� ������� ��䳿
const button = document.getElementById("myButton");
button.addEventListener("click", person.sayHello.bind(person)); // ��� ���� ����������� �������� person




//10. ������� ������� ��� ������ ������� � ������� ���� � ���������� ����������� �� �������� � ������� ��� �������, ��������� �� ��� ���� ������� ���������.

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



//11. ������� ������� ��� ���� ������� ������ �� 10 ������

function cacheWithTimeout(fn, timeout = 10000) { // 10 ������ �� �������������
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
    // ���� ��������� ����� � API
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: "API response" }), 2000);
    });
}

const cachedData = cacheWithTimeout(getDataFromAPI);

cachedData()
    .then((data) => console.log(data)) // ������ ������ - ������ ��� � API
    .then(() => cachedData())
    .then((data) => console.log(data)); // ������ ������ - ������ ��� � ����