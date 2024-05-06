function fetchShoppingList() {
    const itemName = document.getElementById('itemName').value;
    fetch(`/shoppingList?itemName=${itemName}`)
    .then(response => response.json())
    .then(data => {
        const shoppingListTable = document.getElementById('shoppingList');
        shoppingListTable.innerHTML = '';

        const headerRow = shoppingListTable.insertRow(0);
        headerRow.innerHTML = '<th>Name</th><th>Quantity</th><th>Status</th><th>Action</th>';

        data.forEach((item, index) => {
            const row = shoppingListTable.insertRow(index + 1);
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.status ? 'Completed' : 'Pending'}</td>
                <td><button onclick="deleteItem('${item.name}')">Delete</button></td>
            `;
        });
    });
}

function addItem() {
    const itemName = document.getElementById('newItemName').value;
    const quantity = document.getElementById('quantity').value;
    fetch('/addItem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: itemName, quantity: quantity, status: false })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to add item');
        }
    })
    .then(fetchShoppingList)
    .catch(error => {
        alert(error.message);
    });
}

function deleteItem(itemName) {
    fetch(`/deleteItem?itemName=${itemName}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to delete item');
        }
    })
    .then(fetchShoppingList)
    .catch(error => {
        alert(error.message);
    });
}

function clearList() {
    fetch('/clearList', {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to clear list');
        }
    })
    .then(fetchShoppingList)
    .catch(error => {
        alert(error.message);
    });
}

// Викликаємо функцію fetchShoppingList() після завантаження сторінки, щоб відобразити список за замовчуванням
document.addEventListener('DOMContentLoaded', fetchShoppingList);
