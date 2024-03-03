//1. Виведення випадкового числа
// Генерація випадкового числа від 0 до 100
let randomNumber = Math.floor(Math.random() * 100);
// Виведення на екран
console.log('Випадкове число:', randomNumber);


//2. Створення та виведення змінних базових типів
// Змінні базових типів
let number = 10; // число
let string = "Hello world!"; // рядок
let boolean = true; // логічне значення
// Виведення на екран
console.log('Число:', number);
console.log('Рядок:', string);
console.log('Логічне значення:', boolean);

//3. Сума двох чисел
// Змінні для чисел
let num1 = 5;
let num2 = 7;
// Сума чисел
let sum = num1 + num2;
// Виведення суми на екран
console.log('Сума:', sum);


//5. Вік користувача
// Запит віку користувача
let age = prompt("Введіть ваш вік:");
// Виведення повідомлення
console.log("Ваш вік", age);

//6. Сума покупки
// Кількість товару
let quantity = prompt("Введіть кількість товару:", 1);
// Ціна за одиницю
let price = prompt("Введіть ціну за одиницю:", 10);
// Сума покупки
let total = quantity * price;
// Виведення суми на екран
console.log("Сума покупки:", total);

//7. Визначення від'ємного числа
// Введення числа
let number = prompt("Введіть число:");
// Перевірка на негативність
if (number < 0) {
    console.log("Число є від'ємним");
} else {
    console.log("Число не є від'ємним");
}

//8. Назва дня тижня
// Введення номера дня тижня
let dayNumber = prompt("Введіть номер дня тижня (1-7):");
// Назви днів тижня
let days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
// Виведення назви дня
console.log("Назва дня:", days[dayNumber - 1]);

//9. Таблиця множення
// Таблиця множення числа 6
for (let i = 1; i <= 10; i++) {
    console.log(`${6} * ${i} = ${6 * i}`);
}

//10. Операції з одномірним масивом
// Одномірний масив
let arr = [1, 2, 3, 4, 5];
// Квадрат третього числа
let squareThird = arr[2] ** 2;
// Сума першого та останнього елемента
let sumFirstLast = arr[0] + arr[arr.length - 1];
// Сума квадратів від'ємних елементів
let sumSquaresNegative = 0;
for (let element of arr) {
    if (element < 0) {
        sumSquaresNegative += element ** 2;
    }
}
// Виведення результатів
console.log("Квадрат третього числа:", squareThird);
console.log("Сума першого та останнього елемента:", sumFirstLast);
console.log("Сума квадратів від'ємних елементів:", sumSquaresNegative);

//11. Об'єкт "машина" та масив об'єктів
// Об'єкт "машина"
let car = {
    owner: "Іван Петренко",
    model: "Toyota Camry",
    engineVolume: 2.0
};
// Масив об'єктів машин
let cars = [
    { owner: "Петро Іванов", model: "Volkswagen Passat", engineVolume: 1.8 },
    car, // Додаємо об'єкт car до масиву
    { owner: "Олена Павленко", model: "Ford Focus", engineVolume: 1.6 }
];
// Функція для пошуку машини з мінімальним об'ємом двигуна
function findCarWithMinEngineVolume(cars) {
    let minVolume = Infinity;
    let minVolumeCar;
    for (let car of cars) {
        if (car.engineVolume < minVolume) {
            minVolume = car.engineVolume;
            minVolumeCar = car;
        }
    }
    return minVolumeCar;
}
// Знаходимо машину з мінімальним об'ємом двигуна
let carWithMinVolume = findCarWithMinEngineVolume(cars);
// Виведення інформації про машину з мінімальним об'ємом двигуна
console.log("Машина з мінімальним об'ємом двигуна:");
console.log(`  Власник: ${carWithMinVolume.owner}`);
console.log(`  Модель: ${carWithMinVolume.model}`);
console.log(`  Об'єм двигуна: ${carWithMinVolume.engineVolume} л`);



//12. Максимум з мінімумів
// Введення чотирьох чисел
let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");
let num3 = prompt("Введіть третє число:");
let num4 = prompt("Введіть четверте число:");
// Функція для пошуку мінімуму двох чисел
function findMin(a, b) {
    return (a < b) ? a : b;
}
// Максимум з мінімумів
let maxMin = findMin(findMin(num1, num2), findMin(num3, num4));
// Виведення результату
console.log("Максимум з мінімумів:", maxMin);



//13. Довжина та зворотне слово
// Слово користувача
let word = prompt("Введіть слово:");
// Довжина слова
let wordLength = word.length;
// Зворотне слово
let reversedWord = "";
for (let i = wordLength - 1; i >= 0; i--) {
    reversedWord += word[i];
}
// Виведення результатів
console.log("Довжина слова:", wordLength);
console.log("Зворотне слово:", reversedWord);


//4. Підключення файлу script.js та діалогові вікна

//script.js:
// Діалогові вікна
alert("Вітаю!"); // Вікно з повідомленням

let age = prompt("Введіть ваш вік:", 18); // Вікно з запитом

if (confirm("Чи вам подобається JavaScript?")) {
    console.log("Чудово!");
} else {
    console.log("Шкода...");
}

//index.html:
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Лабораторна робота 1</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>