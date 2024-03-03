//1. ������� ����� persons �� ������� � ����� 5 ����� ���� { name: �John�, age: 23, city: �Boston�}.
//��� ������ persons ��������� ���������� groupName =�A�, teacher =�Joan Doe�, year =�2023�.
//� ��������� ����� ����� ����� for ������� �������� ������ �� ���������� ������.

// ��������� ������ persons
const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 24, city: 'New York' },
    { name: 'Peter', age: 25, city: 'Chicago' },
    { name: 'Sarah', age: 26, city: 'Los Angeles' },
    { name: 'Michael', age: 27, city: 'San Francisco' },
];

// ������������ ������������ ������
persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = 2023;

// ��������� �������� ������ �� ������������
// ����� 1: ���� for
for (let i = 0; i < persons.length; i++) {
    console.log(`--- ������� ${i + 1} ---`);
    console.log(persons[i]);
}

// ����� 2: ���� forEach
persons.forEach((person, i) => {
    console.log(`--- ������� ${i + 1} ---`);
    console.log(person);
});

// ��������� ������������ ������
console.log(`�����: ${persons.groupName}`);
console.log(`��������: ${persons.teacher}`);
console.log(`г�: ${persons.year}`);





//2. ������� ���� defaults ����������� ��� ���������� ����������� �������� ���� ������
//���� mode = test, debugLevel = error, logFolder = root.������� ���� userSetting ���� ������
//���� mode = production, debugLevel = trace.������� ������� ��� ������ �� ��������� ���
//��� ����� �� ����� ���������� ��� ���� ����� � ���� ���� ������� ��������
//������������ � ����� userSetting.����������� �� ����� 3 ������� ��� �������� ���� ������.
// ��'���� �����������



//N1 ����� ��'�������

const defaults = {
    mode: 'test',
    debugLevel: 'error',
    logFolder: 'root',
};

const userSettings = {
    mode: 'production',
    debugLevel: 'trace',
};

// ������� ��'�������
function mergeSettings(defaults, userSettings) {
    const mergedSettings = { ...defaults }; // ���������� ��������� defaults

    // ��������� ������������ � userSettings
    for (const key in userSettings) {
        mergedSettings[key] = userSettings[key];
    }

    return mergedSettings;
}
// ��'������� �����������
const finalSettings = mergeSettings(defaults, userSettings);

// ��������� ����������
console.log(finalSettings);

//N2 Object.assign()

const finalSettings = Object.assign({}, defaults, userSettings);
// ��������� ����������
console.log(finalSettings);


//N3 Spread syntax (ES6)

const finalSettings = { ...defaults, ...userSettings };
// ��������� ����������
console.log(finalSettings);




//3. ��� ����� person �� �������� 1 ������� ��������� �������� �� ���������� �� �������
//��������� ���������� �� ����� �����.������ ���� ���� ��������� ����� ��� �������.


// ��������� getter-������ ��� ���� ����������
Object.defineProperty(Person.prototype, 'yearOfBirth', {
    get() {
        return new Date().getFullYear() - this.age;
    },
});

// ������� ������������
const person = new Person('John', 23, 'Boston');

console.log(`��'�: ${person.name}`);
console.log(`³�: ${person.age}`);
console.log(`̳���: ${person.city}`);
console.log(`г� ����������: ${person.yearOfBirth}`);


//���

// ��������� ������� ��� ���� ����������
const yearOfBirthSymbol = Symbol('yearOfBirth');

// ��������� ���� ���������� �� �������� ����������
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
        this[yearOfBirthSymbol] = new Date().getFullYear() - this.age;
    }

    // ������ ��� ���� ����������
    get yearOfBirth() {
        return this[yearOfBirthSymbol];
    }
}

// ������� ������������
const person = new Person('John', 23, 'Boston');

console.log(`��'�: ${person.name}`);
console.log(`³�: ${person.age}`);
console.log(`̳���: ${person.city}`);

// ��������� �������� ������ �� ���� ���������� ����� ������ ������
console.log(`г� ����������: ${person.yearOfBirthSymbol}`); // ����������

// ��������� ���� ���������� ����� ������
console.log(`г� ����������: ${person.yearOfBirth}`);




//4. ����� ��������� ����� ������� ��� ������ ?

//N1 ������������

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



// 5. �������� �������� ���� ����������� ����� persons � ����� ��������� ��������� ���� �John from Boston born in 2000�

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


//6. �������� �������� ���� � ������ persons ������ ����� ������ 20 ����.

const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 19, city: 'New York' },
    { name: 'Peter', age: 25, city: 'Chicago' },
    { name: 'Sarah', age: 26, city: 'Los Angeles' },
    { name: 'Michael', age: 18, city: 'San Francisco' },
];

const adults = persons.filter(person => person.age > 20);

console.log(adults);



//7. � ��������� ���������������� ��������� �������� ���� name, city �� ����� person �
//����� ����.� ��������� ���������������� ��������� ������ ������ ������ persons � ������� �����.

const person = { name: 'John', age: 23, city: 'Boston' };
const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 24, city: 'New York' },
    { name: 'Peter', age: 25, city: 'Chicago' },
];

// ���������������� ��'����
const { name, city } = person;

console.log(`��'�: ${name}`);
console.log(`̳���: ${city}`);

// ���������������� ������
const firstPerson = persons[0];

console.log(firstPerson); // �������� ���� ������ ��'���




//8. ������� ������� getUserData ��� ����� ���������� ��� ����������� �� ������� ���� ��
//������ persons.���� ���� � ����� ������ �� ��������� ������� �� ����������� ����
//������� new Error(�Unable to find user�).������� ������� showUserInfo ��� ������
//���������� ���, �������� � ������� ����� �Loading�, ������� ������� getUserData, ����
//���������� ��������� � �������� ���� ���� � ������� � ����� �Loading finished�, ����
//���������� �� ��������� ������� ����� ������� �� ����� �Loading finished�.

const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Jane', age: 24, city: 'New York' },
    { name: 'Peter', age: 25, city: 'Chicago' },
];

// ��������� ����� �����������
function getUserData(name) {
    const user = persons.find(person => person.name === name);
    if (!user) {
        throw new Error(`Unable to find user: ${name}`);
    }
    return user;
}

// ³���������� ���������� �����������
function showUserInfo(name) {
    console.log('Loading...');
    try {
        const user = getUserData(name);
        console.log(`��'�: ${user.name}`);
        console.log(`³�: ${user.age}`);
        console.log(`̳���: ${user.city}`);
    } catch (error) {
        console.error(error.message);
    }
    console.log('Loading finished');
}

// ������� ������������
showUserInfo('John');
showUserInfo('Alice'); // ��������� �������



//9. �������� ������� ��� ����������� ��������� �������� � ����� ����.

function splitToChars(text) {
    return text.split('');
}

const text = 'Hello world!';
const chars = splitToChars(text);

console.log(chars);



//10. ������� ������� ��� ���������� ����� ����� � ����������� �������.

function reverseString(text) {
    return text.split('').reverse().join('');
}

const text = 'Hello world!';
const reversedText = reverseString(text);

console.log(reversedText);


//11. �������� ������� ��� ����������� �� �������� ��� ����� ���� ������� �.js�

function isJsFile(fileName) {
    const extension = fileName.split('.').pop().toLowerCase();
    return extension === 'js'; // ��������� ��������
}

const fileName1 = 'main.js';
const fileName2 = 'image.png';

console.log(`${fileName1} is a JavaScript file: ${isJsFile(fileName1)}`);
console.log(`${fileName2} is a JavaScript file: ${isJsFile(fileName2)}`);



//12. �������� ������� ��� ����������� ������� �� ����� ���

function splitToWords(sentence) {
    return sentence.trim().split(/\s+/); // ��������� �� �������� ��� ������ ������������
}

const sentence = "Hello world, how are you today?";
const words = splitToWords(sentence);

console.log(words);

//13. �������� ������� ���� ������� ����� ����� � ���������� ��������

function replaceWord(text, oldWord, newWord) {
    const regex = new RegExp(oldWord, 'g'); // ������ g - ��������� �����
    return text.replace(regex, newWord);
}

const text = "The quick brown fox jumps over the lazy dog.";
const replacedText = replaceWord(text, 'fox', 'cat');

console.log(replacedText);