function displayUsers(users) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    // Створення заголовків таблиці
    var headerRow = document.createElement('tr');
    var headers = ['First Name', 'Last Name', 'Score'];
    headers.forEach(function(headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Додавання користувачів до таблиці
    users.forEach(function(user) {
        var row = document.createElement('tr');
        var data = [user.firstname, user.lastname, user.score];
        data.forEach(function(text) {
            var cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Додавання таблиці на сторінку
    var content = document.getElementById('content');
    content.innerHTML = ''; // Очищення вмісту, щоб уникнути дублювання
    content.appendChild(table);
}
