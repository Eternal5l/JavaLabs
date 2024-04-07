//1. Напишіть функцію invokeAfterDelay, яка повертає проміс, який викликає задану функцію із
//заданою затримкою.Продемонструйте її роботу, повертаючи проміс, що містить



function invokeAfterDelay(delay, fn) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fn());
        }, delay);
    });
}

// Приклад використання
invokeAfterDelay(1000, () => Math.floor(Math.random() * 10))
    .then((randomNumber) => console.log(`Випадкове число: ${randomNumber}`));





//2. Створивши на базі попередньої функції функцію produceRandomAfterDelay.Викличте
//функцію produceRandomAfterDelay двічі і надрукуйте суму, після того як будуть отримані обидва результати.



function produceRandomAfterDelay(delay) {
    return invokeAfterDelay(delay, () => Math.floor(Math.random() * 10));
}

// Приклад використання
async function main() {
    const firstNumber = await produceRandomAfterDelay(1000);
    const secondNumber = await produceRandomAfterDelay(2000);
    console.log(`Сума: ${firstNumber + secondNumber}`);
}

main();





//3. Напишіть функцію sleep, яка повертає проміс, який можна викликати так: await sleep(1000)


function sleep(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}




//4. Напишіть функцію getUser яка приймає id та повертає проміс який виконується через 1
//секунду з обєктом користувача з полями імя, вік, місто, id.Підготуйте 4 обєкти користувача
//з id від 0 до 3 які повертатимуться функцією відповідно до id.Якщо незнайомий id
//отриманий – проміс має бути відхилений з помилкою ‘User not found’.



const users = [
    { id: 0, name: "John", age: 25, city: "Kyiv" },
    { id: 1, name: "Anna", age: 28, city: "Lviv" },
    { id: 2, name: "Peter", age: 30, city: "Odesa" },
    { id: 3, name: "Mary", age: 22, city: "Kharkiv" },
];

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((u) => u.id === id);
            if (user) {
                resolve(user);
            } else {
                reject(new Error("User not found"));
            }
        }, 1000);
    });
}



//5. Напишіть функцію loadUsers яка приймає масив ідентифікаторів та повертає масив обєктів
//користувача використовуючи попередню функцію.Обробіть ситуацію коли один з промісів був відхилений.


async function loadUsers(ids) {
    const promises = ids.map((id) => getUser(id));
    try {
        const users = await Promise.all(promises);
        return users;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

// Приклад використання
async function main() {
    const users = await loadUsers([0, 1, 2, 5]);
    console.log(users);
}

main();




//6. Напишіть функцію logCall яка приймає функцію коллбек – викликає її через одну секунду та
//пише в консоль поточний час.Зробіть щоб дана функція повертала проміс.Зробіть 4
//послідовних виклики даної функції використовуючи ланцюжок промісів.



function logCall(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Поточний час: ${new Date().toISOString()}`);
            callback();
            resolve();
        }, 1000);
    });
}

// Приклад використання
async function main() {
    await logCall(() => console.log("Перший виклик"));
    await logCall(() => console.log("Другий виклик"));
    await logCall(() => console.log("Третій виклик"));
    await logCall(() => console.log("Четвертий виклик"));
}

main();



//7. Напишіть функцію яка showUsers яка симулює завантаження користувачів використовуючи
//loadUsers.Перед викликом loadUsers дана функція має вивести в консоль ‘loading’ при при
//успішному чи неуспішному завершенні виведе ‘loading finished’. Використайте синтаксис
//async / await при виконанні даного завдання




async function showUsers(ids) {
    console.log("loading");
    try {
        const users = await loadUsers(ids);
        console.log(users);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("loading finished");
    }
}

// Приклад використання
async function main() {
    await showUsers([0, 1, 2, 5]);
}

main();
