//1. Створіть масив persons та додайте в нього 5 обєктів типу { name: ‘John’, age: 23, city: ‘Boston’}.
//Для масиву persons встановіть властивості groupName =’A’, teacher =’Joan Doe’, year =’2023’.
//З допомогою різних версій циклу for виведіть елементи масиву та властивості масиву.

// Створення масиву persons
const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 24, city: 'New York' },
    { name: 'Peter', age: 25, city: 'Chicago' },
    { name: 'Sarah', age: 26, city: 'Los Angeles' },
    { name: 'Michael', age: 27, city: 'San Francisco' },
];

// Встановлення властивостей масиву
persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = 2023;

// Виведення елементів масиву та властивостей
// Версія 1: цикл for
for (let i = 0; i < persons.length; i++) {
    console.log(`--- Елемент ${i + 1} ---`);
    console.log(persons[i]);
}

// Версія 2: цикл forEach
persons.forEach((person, i) => {
    console.log(`--- Елемент ${i + 1} ---`);
    console.log(person);
});

// Виведення властивостей масиву
console.log(`Група: ${persons.groupName}`);
console.log(`Викладач: ${persons.teacher}`);
console.log(`Рік: ${persons.year}`);





//2. Створіть обєкт defaults призначений для збереження налаштувань програми який містить
//поля mode = test, debugLevel = error, logFolder = root.Створіть обєкт userSetting який містить
//поля mode = production, debugLevel = trace.Створіть функцію яка прийме як аргументи дані
//два обєкти та обєднає властивості цих двох обєктів в один обєкт надаючи пріоритет
//властивостям з обєкта userSetting.Запропонуєти як мінімум 3 способи для вирішення цієї задачі.
// Об'єкти налаштувань



//N1 Ручне об'єднання

const defaults = {
    mode: 'test',
    debugLevel: 'error',
    logFolder: 'root',
};

const userSettings = {
    mode: 'production',
    debugLevel: 'trace',
};

// Функція об'єднання
function mergeSettings(defaults, userSettings) {
    const mergedSettings = { ...defaults }; // Поверхневе копіювання defaults

    // Перезапис властивостей з userSettings
    for (const key in userSettings) {
        mergedSettings[key] = userSettings[key];
    }

    return mergedSettings;
}
// Об'єднання налаштувань
const finalSettings = mergeSettings(defaults, userSettings);

// Виведення результату
console.log(finalSettings);

//N2 Object.assign()

const finalSettings = Object.assign({}, defaults, userSettings);
// Виведення результату
console.log(finalSettings);


//N3 Spread syntax (ES6)

const finalSettings = { ...defaults, ...userSettings };
// Виведення результату
console.log(finalSettings);




//3. Для обєкта person із завдання 1 додайте можливість отримати рік народження не додаючи
//додаткової властивості до цього обєкта.Зробіть дане поле доступним тільки для читання.


// Додавання getter-методу для року народження
Object.defineProperty(Person.prototype, 'yearOfBirth', {
    get() {
        return new Date().getFullYear() - this.age;
    },
});

// Приклад використання
const person = new Person('John', 23, 'Boston');

console.log(`Ім'я: ${person.name}`);
console.log(`Вік: ${person.age}`);
console.log(`Місто: ${person.city}`);
console.log(`Рік народження: ${person.yearOfBirth}`);


//Або

// Створення символу для року народження
const yearOfBirthSymbol = Symbol('yearOfBirth');

// Додавання року народження як приватної властивості
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
        this[yearOfBirthSymbol] = new Date().getFullYear() - this.age;
    }

    // Геттер для року народження
    get yearOfBirth() {
        return this[yearOfBirthSymbol];
    }
}

// Приклад використання
const person = new Person('John', 23, 'Boston');

console.log(`Ім'я: ${person.name}`);
console.log(`Вік: ${person.age}`);
console.log(`Місто: ${person.city}`);

// Неможливо отримати доступ до року народження через прямий доступ
console.log(`Рік народження: ${person.yearOfBirthSymbol}`); // Недоступно

// Отримання року народження через геттер
console.log(`Рік народження: ${person.yearOfBirth}`);




//4. Якими способами можна обєднати два масиви ?

//N1 Конкатенація

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = arr1.concat(arr2);
console.log(combinedArr);

//N2 Spread syntax(ES6)

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);

//N3 Array.prototype.push()
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1);



// 5. Напишіть алгоритм який перетворить масив persons у масив текстових фрагментів типу ’John from Boston born in 2000’

const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 24, city: 'New York' },
    { name: 'Peter', age: 25, city: 'Chicago' },
    { name: 'Sarah', age: 26, city: 'Los Angeles' },
    { name: 'Michael', age: 27, city: 'San Francisco' },
];

const textFragments = persons.map(person => {
    const yearOfBirth = new Date().getFullYear() - person.age;
    return `${person.name} from ${person.city} born in ${yearOfBirth}`;
});

console.log(textFragments);


//6. Напишіть алгоритм який з масиву persons вибере людей старше 20 років.

const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 19, city: 'New York' },
    { name: 'Peter', age: 25, city: 'Chicago' },
    { name: 'Sarah', age: 26, city: 'Los Angeles' },
    { name: 'Michael', age: 18, city: 'San Francisco' },
];

const adults = persons.filter(person => person.age > 20);

console.log(adults);



//7. З допомогою деструктуризації присвойте значення полів name, city із обєкта person у
//окремі змінні.З допомогою деструктуризації присвойте перший елемен масиву persons у зокрему змінну.

const person = { name: 'John', age: 23, city: 'Boston' };
const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 24, city: 'New York' },
    { name: 'Peter', age: 25, city: 'Chicago' },
];

// Деструктуризація об'єкта
const { name, city } = person;

console.log(`Ім'я: ${name}`);
console.log(`Місто: ${city}`);

// Деструктуризація масиву
const firstPerson = persons[0];

console.log(firstPerson); // Виводить весь перший об'єкт




//8. Створіть функцію getUserData яка приймє аргументом імя користувача та повертає обєкт із
//масиву persons.Якщо обєкт з таким іменем не знайдений функція має згенерувати обєкт
//помилки new Error(‘Unable to find user’).Створіть функцію showUserInfo яка приймає
//аргументом імя, виводить в консоль текст ‘Loading’, викликає функцію getUserData, якщо
//користувач знайдений – виводить його поля в консоль і текст ‘Loading finished’, якщо
//користувач не знайдений виведіть текст помилки та текст ‘Loading finished’.

const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 24, city: 'New York' },
    { name: 'Peter', age: 25, city: 'Chicago' },
];

// Отримання даних користувача
function getUserData(name) {
    const user = persons.find(person => person.name === name);
    if (!user) {
        throw new Error(`Unable to find user: ${name}`);
    }
    return user;
}

// Відображення інформації користувача
function showUserInfo(name) {
    console.log('Loading...');
    try {
        const user = getUserData(name);
        console.log(`Ім'я: ${user.name}`);
        console.log(`Вік: ${user.age}`);
        console.log(`Місто: ${user.city}`);
    } catch (error) {
        console.error(error.message);
    }
    console.log('Loading finished');
}

// Приклад використання
showUserInfo('John');
showUserInfo('Alice'); // Очікується помилка



//9. Напишіть функцію яка перетворить текстовий фрагмент у масив букв.

function splitToChars(text) {
    return text.split('');
}

const text = 'Hello world!';
const chars = splitToChars(text);

console.log(chars);



//10. Створіть функцію яка відобразить букви слова у зворотньому порядку.

function reverseString(text) {
    return text.split('').reverse().join('');
}

const text = 'Hello world!';
const reversedText = reverseString(text);

console.log(reversedText);


//11. Напишіть функцію яка визначатиме чи передане імя файлу файл формату ‘.js’

function isJsFile(fileName) {
    const extension = fileName.split('.').pop().toLowerCase();
    return extension === 'js'; // Завершуємо перевірку
}

const fileName1 = 'main.js';
const fileName2 = 'image.png';

console.log(`${fileName1} is a JavaScript file: ${isJsFile(fileName1)}`);
console.log(`${fileName2} is a JavaScript file: ${isJsFile(fileName2)}`);



//12. Напишіть функцію яка перетворить речення на масив слів

function splitToWords(sentence) {
    return sentence.trim().split(/\s+/); // Розділення за пробілами або іншими роздільниками
}

const sentence = "Hello world, how are you today?";
const words = splitToWords(sentence);

console.log(words);

//13. Напишіть алгорим який замінить певне слово у текстовому фрагменті

function replaceWord(text, oldWord, newWord) {
    const regex = new RegExp(oldWord, 'g'); // Прапор g - глобальна заміна
    return text.replace(regex, newWord);
}

const text = "The quick brown fox jumps over the lazy dog.";
const replacedText = replaceWord(text, 'fox', 'cat');

console.log(replacedText);