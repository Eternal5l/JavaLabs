const ws = require('ws');
const axios = require('axios'); // Додати axios для завантаження даних з сайтів

const currencies = ['bitcoin', 'ethereum', 'tether', 'binance-coin', 'cardano'];

const port = 8080; // Замініть на бажаний порт

const server = new ws.Server({ port });

server.on('connection', (websocket) => {
  // Функція для оновлення курсів валют
  function updatePrices() {
    // Отримайте ціни валют за допомогою axios
    axios.get('https://minfin.com.ua/currency/crypto/') // Замініть на URL-адресу вашого API
      .then(response => {
        const prices = {};
        for (const currency of currencies) {
          // Обробіть відповідь API та отримайте ціну для кожної валюти
          prices[currency] = response.data[currency];
        }

        // Створіть об'єкт даних для надсилання клієнту
        const data = {
          type: 'prices',
          data: prices
        };

        // Надішліть оновлені ціни клієнту
        websocket.send(JSON.stringify(data));
      })
      .catch(error => {
        console.error('Помилка при отриманні курсів валют:', error);
      });
  }

  // Запустіть оновлення курсів валют при підключенні клієнта
  updatePrices();

  // Заплануйте оновлення курсів валют через випадковий проміжок часу
  setInterval(updatePrices, Math.random() * (20000 - 1000) + 1000);
});

server.on('listening', () => {
  console.log(`Сервер слухає на ws://localhost:${port}`);
});
