//1. напишіть простий модуль логування, який підтримує логування повідомлень, для яких
//рівень логування перевищує заданий поріг.експортуйте функцію log, константи рівнів
//логування та функцію завдання рівня логування.


const LOG_LEVEL_DEBUG = 1;
const LOG_LEVEL_INFO = 2;
const LOG_LEVEL_ERROR = 3;

let currentLogLevel = LOG_LEVEL_INFO;

function log(message, level) {
    if (level >= currentLogLevel) {
        console.log(`[${level === LOG_LEVEL_DEBUG ? "DEBUG" : level === LOG_LEVEL_INFO ? "INFO" : "ERROR"}]: ${message}`);
    }
}

function setLogLevel(level) {
    currentLogLevel = level;
}

export { log, LOG_LEVEL_DEBUG, LOG_LEVEL_INFO, LOG_LEVEL_ERROR, setLogLevel };



//2. повторіть попереднє завдання але тепер експортуйте весь класс по замовчуванню.



class Logger {
    constructor(logLevel = LOG_LEVEL_INFO) {
        this.logLevel = logLevel;
    }

    log(message, level) {
        if (level >= this.logLevel) {
            console.log(`[${level === LOG_LEVEL_DEBUG ? "DEBUG" : level === LOG_LEVEL_INFO ? "INFO" : "ERROR"}]: ${message}`);
        }
    }

    setLogLevel(level) {
        this.logLevel = level;
    }
}

export default Logger;



//3. знайдіть javascript - бібліотеку для шифрування(наприклад, https://github.com/brix/cryptojs). напишіть програму, яка імпортує цю бібліотеку у вигляді ecmascript і шифрує, а потім
//    дешифрує повідомлення.

const CryptoJS = require("crypto-js");

const message = "Це повідомлення буде зашифровано";
const encryptedMessage = CryptoJS.AES.encrypt(message, "секретний ключ").toString();
const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, "секретний ключ").toString(CryptoJS.enc.Utf8);

console.log("Оригінальне повідомлення:", message);
console.log("Зашифроване повідомлення:", encryptedMessage);
console.log("Дешифроване повідомлення:", decryptedMessage);



//4. напишіть простий модуль шифрування, в якому використовується шифр цезаря
//    (додавання константи до кожної кодової точки).використайте модуль логування із попередніх вправ, щоб протоколювати всі звернення до decrypt.


const LOG_LEVEL_DEBUG = 1;
const LOG_LEVEL_INFO = 2;
const LOG_LEVEL_ERROR = 3;

let currentLogLevel = LOG_LEVEL_INFO;

function log(message, level) {
    if (level >= currentLogLevel) {
        console.log(`[${level === LOG_LEVEL_DEBUG ? "DEBUG" : level === LOG_LEVEL_INFO ? "INFO" : "ERROR"}]: ${message}`);
    }
}

function encrypt(message, shift) {
    const encrypted = message.split("").map(char => String.fromCharCode(char.charCodeAt(0) + shift));
    log(`Зашифровано повідомлення: ${message} -> ${encrypted.join("")}`, LOG_LEVEL_DEBUG);
    return encrypted.join("");
}

function decrypt(message, shift) {
    const decrypted = message.split("").map(char => String.fromCharCode(char.charCodeAt(0) - shift));
    log(`Дешифровано повідомлення: ${message} -> ${decrypted.join("")}`, LOG_LEVEL_DEBUG);
    return decrypted.join("");
}

export { encrypt, decrypt, LOG_LEVEL_DEBUG, LOG_LEVEL_INFO, LOG_LEVEL_ERROR };



//5. напишіть простий модуль, який включає функції як повертають: випадкові цілі числа,
//    масиви цілих випадкових чисел і випадкові текстові фрагменти.використовуйте якнайбільше синтаксичних форм export


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArray(length, min, max) {
    return Array.from({ length }, () => getRandomInt(min, max));
}

function getRandomText(length) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

export { getRandomInt, getRandomArray, getRandomText };

const randomNumber = getRandomInt(1, 100);
console.log("Випадкове число:", randomNumber);

const randomArray = getRandomArray(10, 0, 10);
console.log("Випадковий масив:", randomArray);

const randomText = getRandomText(20);
console.log("Випадковий текст:", randomText);
