//1. �������� ������� ������ ���������, ���� ������� ��������� ����������, ��� ����
//����� ��������� �������� ������� ����.����������� ������� log, ��������� ����
//��������� �� ������� �������� ���� ���������.


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



//2. �������� �������� �������� ��� ����� ����������� ���� ����� �� ������������.



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



//3. ������� javascript - �������� ��� ����������(���������, https://github.com/brix/cryptojs). �������� ��������, ��� ������� �� �������� � ������ ecmascript � �����, � ����
//    ������� �����������.

const CryptoJS = require("crypto-js");

const message = "�� ����������� ���� �����������";
const encryptedMessage = CryptoJS.AES.encrypt(message, "��������� ����").toString();
const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, "��������� ����").toString(CryptoJS.enc.Utf8);

console.log("���������� �����������:", message);
console.log("����������� �����������:", encryptedMessage);
console.log("����������� �����������:", decryptedMessage);



//4. �������� ������� ������ ����������, � ����� ��������������� ���� ������
//    (��������� ��������� �� ����� ������ �����).������������ ������ ��������� �� ��������� �����, ��� ������������� �� ��������� �� decrypt.


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
    log(`����������� �����������: ${message} -> ${encrypted.join("")}`, LOG_LEVEL_DEBUG);
    return encrypted.join("");
}

function decrypt(message, shift) {
    const decrypted = message.split("").map(char => String.fromCharCode(char.charCodeAt(0) - shift));
    log(`����������� �����������: ${message} -> ${decrypted.join("")}`, LOG_LEVEL_DEBUG);
    return decrypted.join("");
}

export { encrypt, decrypt, LOG_LEVEL_DEBUG, LOG_LEVEL_INFO, LOG_LEVEL_ERROR };



//5. �������� ������� ������, ���� ������ ������� �� ����������: �������� ��� �����,
//    ������ ����� ���������� ����� � �������� ������� ���������.�������������� ���������� ������������ ���� export


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
console.log("��������� �����:", randomNumber);

const randomArray = getRandomArray(10, 0, 10);
console.log("���������� �����:", randomArray);

const randomText = getRandomText(20);
console.log("���������� �����:", randomText);
