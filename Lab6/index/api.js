var users = [
    
        // Масив з 20 об'єктів користувачів (firstname, lastname, score)
        
            { firstname: 'John', lastname: 'Doe', score: 85 },
            { firstname: 'Alice', lastname: 'Smith', score: 92 },
            { firstname: 'J', lastname: 'Dom', score: 85 },
            { firstname: 'Ali', lastname: 'Sm', score: 92 },
            { firstname: 'Jo', lastname: 'D', score: 85 },
            { firstname: 'John', lastname: 'Doe', score: 85 },
            { firstname: 'Alice', lastname: 'Smith', score: 92 },
            { firstname: 'J', lastname: 'Dom', score: 85 },
            { firstname: 'Ali', lastname: 'Sm', score: 92 },
            // Додайте решту об'єктів користувачів тут
];

function fetchUsers(callback) {
    // Масив з 20 об'єктів користувачів (firstname, lastname, score)
    users = [
        { firstname: 'John', lastname: 'Doe', score: 85 },
        { firstname: 'Alice', lastname: 'Smith', score: 92 },
        { firstname: 'J', lastname: 'Dom', score: 85 },
        { firstname: 'Ali', lastname: 'Sm', score: 92 },
        { firstname: 'Jo', lastname: 'D', score: 85 },
        { firstname: 'John', lastname: 'Doe', score: 85 },
        { firstname: 'Alice', lastname: 'Smith', score: 92 },
        { firstname: 'J', lastname: 'Dom', score: 85 },
        { firstname: 'Ali', lastname: 'Sm', score: 92 },
        // Додайте решту об'єктів користувачів тут
    ];

    // Затримка в 1 секунду перед викликом зворотного виклику з випадковими 10 елементами
    setTimeout(function() {
        var randomUsers = users.sort(() => 0.5 - Math.random()).slice(0, 1000);
        callback(randomUsers);
    }, 1000);
}

function getNewUsers() {
    // Повертає перших 1000 користувачів зі списку
    return users.slice(0, 1000);
}
