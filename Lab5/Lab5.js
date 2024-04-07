//1. �������� ������� invokeAfterDelay, ��� ������� �����, ���� ������� ������ ������� ��
//������� ���������.��������������� �� ������, ���������� �����, �� ������



function invokeAfterDelay(delay, fn) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fn());
        }, delay);
    });
}

// ������� ������������
invokeAfterDelay(1000, () => Math.floor(Math.random() * 10))
    .then((randomNumber) => console.log(`��������� �����: ${randomNumber}`));





//2. ��������� �� ��� ���������� ������� ������� produceRandomAfterDelay.��������
//������� produceRandomAfterDelay ���� � ���������� ����, ���� ���� �� ������ ������� ������ ����������.



function produceRandomAfterDelay(delay) {
    return invokeAfterDelay(delay, () => Math.floor(Math.random() * 10));
}

// ������� ������������
async function main() {
    const firstNumber = await produceRandomAfterDelay(1000);
    const secondNumber = await produceRandomAfterDelay(2000);
    console.log(`����: ${firstNumber + secondNumber}`);
}

main();





//3. �������� ������� sleep, ��� ������� �����, ���� ����� ��������� ���: await sleep(1000)


function sleep(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}




//4. �������� ������� getUser ��� ������ id �� ������� ����� ���� ���������� ����� 1
//������� � ������ ����������� � ������ ���, ��, ����, id.ϳ�������� 4 ����� �����������
//� id �� 0 �� 3 �� ��������������� �������� �������� �� id.���� ���������� id
//��������� � ����� �� ���� ��������� � �������� �User not found�.



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



//5. �������� ������� loadUsers ��� ������ ����� �������������� �� ������� ����� �����
//����������� �������������� ��������� �������.������� �������� ���� ���� � ������ ��� ���������.


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

// ������� ������������
async function main() {
    const users = await loadUsers([0, 1, 2, 5]);
    console.log(users);
}

main();




//6. �������� ������� logCall ��� ������ ������� ������� � ������� �� ����� ���� ������� ��
//���� � ������� �������� ���.������ ��� ���� ������� ��������� �����.������ 4
//���������� ������� ���� ������� �������������� �������� ������.



function logCall(callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`�������� ���: ${new Date().toISOString()}`);
            callback();
            resolve();
        }, 1000);
    });
}

// ������� ������������
async function main() {
    await logCall(() => console.log("������ ������"));
    await logCall(() => console.log("������ ������"));
    await logCall(() => console.log("����� ������"));
    await logCall(() => console.log("��������� ������"));
}

main();



//7. �������� ������� ��� showUsers ��� ������� ������������ ������������ ��������������
//loadUsers.����� �������� loadUsers ���� ������� �� ������� � ������� �loading� ��� ���
//�������� �� ���������� ��������� ������ �loading finished�. ������������ ���������
//async / await ��� �������� ������ ��������




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

// ������� ������������
async function main() {
    await showUsers([0, 1, 2, 5]);
}

main();
