// Обробник повідомлень від головного потока
self.onmessage = function(event) {
    // Отримуємо дані з головного потока
    const n = event.data;
    // Викликаємо функцію для обчислення числа Фібоначчі
    const result = fibonacci(n);
    // Надсилаємо результат у головний потік
    self.postMessage(result);
}

// Функція для обчислення числа Фібоначчі
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
