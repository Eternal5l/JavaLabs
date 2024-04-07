function init() {
    // Отримуємо елемент з id "main"
    var mainElement = document.getElementById('main');

    // Створюємо елементи header, main і footer
    var header = document.createElement('header');
    var mainContent = document.createElement('main');
    var footer = document.createElement('footer');

    // Додаємо їх до елементу з id "main"
    mainElement.appendChild(header);
    mainElement.appendChild(mainContent);
    mainElement.appendChild(footer);

    // Додамо вміст в header, main і footer, а також виконаємо інші дії тут

    // Визиваємо функцію для створення елементів у блоку mainContent
    createMainContent(mainContent);

    // Додамо кнопки у блоку header
    createHeaderButtons(header);

    // Додамо блоки у блоку footer
    createFooterBlocks(footer);
}

// Викликаємо функцію init при завантаженні сторінки
window.onload = init;






//=============================================================================================





function createMainContent(mainContent) {
    // Створюємо три блоки: leftPanel, content, rightPanel
    var leftPanel = document.createElement('div');
    leftPanel.id = 'leftPanel';
    var content = document.createElement('div');
    content.id = 'content';
    var rightPanel = document.createElement('div');
    rightPanel.id = 'rightPanel';

    // Додаємо їх до блоку mainContent
    mainContent.appendChild(leftPanel);
    mainContent.appendChild(content);
    mainContent.appendChild(rightPanel);

    // Встановлюємо стилі та інші дії для цих блоків
    leftPanel.style.backgroundColor = '#ffcccc';
    content.style.backgroundColor = '#ccffcc';
    rightPanel.style.backgroundColor = '#ccccff';

    // Створюємо div з класом loader у кожному блоку
    createLoader(leftPanel);
    createLoader(content);
    createLoader(rightPanel);
}

function createLoader(parentElement) {
    var loader = document.createElement('div');
    loader.className = 'loader';
    parentElement.appendChild(loader);
}


//=================================================================




function createHeaderButtons(header) {
    // Створюємо кнопки: User Rating, News, Contacts, About
    var buttons = ['User Rating', 'News', 'Contacts', 'About'];

    // Проходимо по кожній кнопці
    buttons.forEach(function(buttonText) {
        // Створюємо кнопку
        var button = document.createElement('button');
        // Встановлюємо текст кнопки
        button.textContent = buttonText;
        // Додаємо обробник кліку
        button.addEventListener('click', function() {
            // При кліку встановлюємо текст кнопки як заголовок блоку content
            document.getElementById('content').textContent = buttonText;
        });
        // Додаємо кнопку до блоку header
        header.appendChild(button);
    });
}



//=======================================================================



function createFooterBlocks(footer) {
    // Створюємо блок Current users для відображення кількості активних користувачів
    var currentUsersBlock = document.createElement('div');
    currentUsersBlock.textContent = 'Current users: ';
    footer.appendChild(currentUsersBlock);

    // Підрахунок кількості активних користувачів
    var currentUsersCount = getCurrentUsersCount(); // Припустимо, що у вас є функція, яка повертає кількість активних користувачів

    // Додавання кількості користувачів до блоку
    var countSpan = document.createElement('span');
    countSpan.textContent = currentUsersCount;
    currentUsersBlock.appendChild(countSpan);

    // Створюємо блок New users для відображення списку нікнеймів останніх 5 користувачів
    var newUsersBlock = document.createElement('div');
    newUsersBlock.textContent = 'New users: ';
    footer.appendChild(newUsersBlock);

    // Підрахунок та відображення нових користувачів
    var newUsersList = getNewUsersList(); // Припустимо, що у вас є функція, яка повертає список нових користувачів
    displayNewUsers(newUsersList, newUsersBlock);
}

// Функція для підрахунку кількості активних користувачів (припущення)
function getCurrentUsersCount() {
    // Ваш код для підрахунку кількості активних користувачів тут
    return getNewUsers().length; // Повертаємо просто демонстративне значення
}

// Функція для отримання списку нових користувачів (припущення)
function getNewUsersList() {
    // Ваш код для отримання списку нових користувачів тут
    return [users]; // Повертаємо просто демонстративний список
}

// Функція для відображення списку нових користувачів у вказаному елементі
function displayNewUsers(users, container) {
    var ul = document.createElement('ul');
    users.forEach(function(user) {
        var li = document.createElement('li');
        li.textContent = user;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}




//=========================================================================




// function displayNewUsers(newUsers) {
//     var newUsersBlock = document.createElement('div');
//     newUsersBlock.textContent = 'New users:';
//     newUsers.forEach(function(user) {
//         var userSpan = document.createElement('span');
//         userSpan.textContent = user.firstname + ' ' + user.lastname + ', ';
//         newUsersBlock.appendChild(userSpan);
//     });
//     document.getElementById('footer').appendChild(newUsersBlock);
// }


//===========================================================================





//===========================================================================

document.addEventListener("DOMContentLoaded", function() {
    var getUsersButton = document.createElement('button');
    getUsersButton.textContent = 'Get Users';
    getUsersButton.addEventListener('click', function() {
        fetchUsers(function(users) {
            displayUsers(users);
        });
    });
    document.getElementById('footer').appendChild(getUsersButton);

    // Переписати функцію displayNewUsers
function displayNewUsers(newUsers) {
    var newUsersBlock = document.createElement('div');
    newUsersBlock.textContent = 'New users: ';
    newUsers.forEach(function(user) {
        var userSpan = document.createElement('span');
        userSpan.textContent = user.firstname + ' ' + user.lastname + ', ';
        newUsersBlock.appendChild(userSpan);
    });
    document.getElementById('footer').appendChild(newUsersBlock);
}

//Переписати обробник для кнопки Get Users
getUsersButton.addEventListener('click', function() {
    fetchUsers(function(users) {
        displayUsers(users);
        var newUsers = getNewUsers(); // Отримати нових користувачів
        displayNewUsers(newUsers);    // Відобразити їх
    });
});

    
});


//==================================================================================================




document.addEventListener("DOMContentLoaded", function() {
    // Остання частина коду для кнопки "Get Users" зберігається тут

    // Затримка для відображення поля вводу та кнопки пошуку у блоку leftPanel
    setTimeout(function() {
        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        var searchButton = document.createElement('button');
        searchButton.textContent = 'Search';
        searchButton.addEventListener('click', function() {
            var searchText = input.value.toLowerCase();
            var table = document.querySelector('#content table');
            var rows = table.getElementsByTagName('tr');

            Array.from(rows).forEach(function(row) {
                var cells = row.getElementsByTagName('td');
                var found = false;
                Array.from(cells).forEach(function(cell) {
                    if (cell.textContent.toLowerCase().includes(searchText)) {
                        found = true;
                    }
                });
                if (found) {
                    row.style.backgroundColor = 'yellow';
                } else {
                    row.style.backgroundColor = '';
                }
            });
        });
        document.getElementById('leftPanel').appendChild(input);
        document.getElementById('leftPanel').appendChild(searchButton);
    }, 1000);
    document.addEventListener('DOMContentLoaded', function() {
        // Ваш код для додавання чекбоксу "Edit table"
        var editCheckbox = document.createElement('input');
        editCheckbox.type = 'checkbox';
        editCheckbox.id = 'editCheckbox';
        var editLabel = document.createElement('label');
        editLabel.textContent = 'Edit table';
        editLabel.appendChild(editCheckbox);
    
        // Отримуємо елемент rightPanel
        var rightPanel = document.getElementById('rightPanel');
        // Перевіряємо, чи елемент існує
        if (rightPanel) {
            // Якщо існує, додаємо чекбокс
            rightPanel.appendChild(editLabel);
        } else {
            console.error("Element with id 'rightPanel' not found.");
        }
    });
    
});




//===========================================================================================





//===========================================================================================





//==================================================================================



document.addEventListener("DOMContentLoaded", function() {
    // Попередні частини коду зберігаються тут

    // Затримка для відображення суми балів у блоку rightPanel
    setTimeout(function() {
        fetchUsers(function(users) {
            var sum = users.reduce(function(total, user) {
                return total + user.score;
            }, 0);
            var sumBlock = document.createElement('div');
            sumBlock.textContent = 'Total score: ' + sum;
            document.getElementById('rightPanel').appendChild(sumBlock);
        });
    }, 1000);

    // Додавання чекбоксу "Edit table"
    var editCheckbox = document.createElement('input');
    editCheckbox.type = 'checkbox';
    editCheckbox.id = 'editCheckbox';
    var editLabel = document.createElement('label');
    editLabel.textContent = 'Edit table';
    editLabel.appendChild(editCheckbox);
    document.getElementById('rightPanel').appendChild(editLabel);

    // Обробник для чекбоксу "Edit table"
    editCheckbox.addEventListener('change', function() {
        var table = document.querySelector('#content table');
        var rows = table.getElementsByTagName('tr');
        if (this.checked) {
            Array.from(rows).forEach(function(row, index) {
                var deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', function() {
                    table.deleteRow(index);
                });
                var cell = row.insertCell();
                cell.appendChild(deleteButton);
            });
        } else {
            Array.from(rows).forEach(function(row) {
                row.deleteCell(-1);
            });
        }
    });
    var tableHeader = document.querySelector('#content table th:first-child');
    console.log(tableHeader);
    
    // Обробник для сортування таблички за прізвищем користувача
    document.querySelector('#content table th:first-child').addEventListener('click', function() {
        var table = document.querySelector('#content table');
        var tbody = table.tBodies[0];
        var rows = Array.from(tbody.rows);
        var sortedRows = rows.sort((a, b) => {
            var nameA = a.cells[1].textContent.toUpperCase();
            var nameB = b.cells[1].textContent.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        tbody.innerHTML = '';
        sortedRows.forEach(row => tbody.appendChild(row));
    });
});



//==============================================================================================

