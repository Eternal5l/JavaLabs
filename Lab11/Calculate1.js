// Функція для обчислення числа Фібоначчі
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Функція, яка викликається при завершенні обчислення числа Фібоначчі
function onFibonacciCalculated(result) {
    alert("Calculation Finished! Result: " + result);
}

// Функція, яка буде виконуватись у робочому потоці
function calculateFibonacciInWorker(n) {
    // Викликаємо функцію для обчислення числа Фібоначчі
    const result = fibonacci(n);
    // Повідомляємо головний потік про результат
    self.postMessage(result);
}

// Створюємо новий Web Worker
const fibonacciWorker = new Worker("fibonacciWorker.js");

// Обробник повідомлень від робочого потока
fibonacciWorker.onmessage = function(event) {
    const result = event.data;
    onFibonacciCalculated(result);
};

// Функція для обчислення числа Фібоначчі з використанням робочого потока
function calculateFibonacciWithWorker() {
    const n = parseInt(document.getElementById("fibInput").value);
    if (!isNaN(n)) {
        // Надсилаємо дані робочому потоці для обчислення
        fibonacciWorker.postMessage(n);
    } else {
        alert("Please enter a valid number.");
    }
}
