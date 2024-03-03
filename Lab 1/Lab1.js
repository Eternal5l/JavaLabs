//1. ��������� ����������� �����
// ��������� ����������� ����� �� 0 �� 100
let randomNumber = Math.floor(Math.random() * 100);
// ��������� �� �����
console.log('��������� �����:', randomNumber);


//2. ��������� �� ��������� ������ ������� ����
// ���� ������� ����
let number = 10; // �����
let string = "Hello world!"; // �����
let boolean = true; // ������ ��������
// ��������� �� �����
console.log('�����:', number);
console.log('�����:', string);
console.log('������ ��������:', boolean);

//3. ���� ���� �����
// ���� ��� �����
let num1 = 5;
let num2 = 7;
// ���� �����
let sum = num1 + num2;
// ��������� ���� �� �����
console.log('����:', sum);


//5. ³� �����������
// ����� ��� �����������
let age = prompt("������ ��� ��:");
// ��������� �����������
console.log("��� ��", age);

//6. ���� �������
// ʳ������ ������
let quantity = prompt("������ ������� ������:", 1);
// ֳ�� �� �������
let price = prompt("������ ���� �� �������:", 10);
// ���� �������
let total = quantity * price;
// ��������� ���� �� �����
console.log("���� �������:", total);

//7. ���������� ��'������ �����
// �������� �����
let number = prompt("������ �����:");
// �������� �� �����������
if (number < 0) {
    console.log("����� � ��'�����");
} else {
    console.log("����� �� � ��'�����");
}

//8. ����� ��� �����
// �������� ������ ��� �����
let dayNumber = prompt("������ ����� ��� ����� (1-7):");
// ����� ��� �����
let days = ["�����", "��������", "³������", "������", "������", "�'������", "������"];
// ��������� ����� ���
console.log("����� ���:", days[dayNumber - 1]);

//9. ������� ��������
// ������� �������� ����� 6
for (let i = 1; i <= 10; i++) {
    console.log(`${6} * ${i} = ${6 * i}`);
}

//10. �������� � ��������� �������
// ��������� �����
let arr = [1, 2, 3, 4, 5];
// ������� �������� �����
let squareThird = arr[2] ** 2;
// ���� ������� �� ���������� ��������
let sumFirstLast = arr[0] + arr[arr.length - 1];
// ���� �������� ��'����� ��������
let sumSquaresNegative = 0;
for (let element of arr) {
    if (element < 0) {
        sumSquaresNegative += element ** 2;
    }
}
// ��������� ����������
console.log("������� �������� �����:", squareThird);
console.log("���� ������� �� ���������� ��������:", sumFirstLast);
console.log("���� �������� ��'����� ��������:", sumSquaresNegative);

//11. ��'��� "������" �� ����� ��'����
// ��'��� "������"
let car = {
    owner: "���� ��������",
    model: "Toyota Camry",
    engineVolume: 2.0
};
// ����� ��'���� �����
let cars = [
    { owner: "����� ������", model: "Volkswagen Passat", engineVolume: 1.8 },
    car, // ������ ��'��� car �� ������
    { owner: "����� ��������", model: "Ford Focus", engineVolume: 1.6 }
];
// ������� ��� ������ ������ � ��������� ��'���� �������
function findCarWithMinEngineVolume(cars) {
    let minVolume = Infinity;
    let minVolumeCar;
    for (let car of cars) {
        if (car.engineVolume < minVolume) {
            minVolume = car.engineVolume;
            minVolumeCar = car;
        }
    }
    return minVolumeCar;
}
// ��������� ������ � ��������� ��'���� �������
let carWithMinVolume = findCarWithMinEngineVolume(cars);
// ��������� ���������� ��� ������ � ��������� ��'���� �������
console.log("������ � ��������� ��'���� �������:");
console.log(`  �������: ${carWithMinVolume.owner}`);
console.log(`  ������: ${carWithMinVolume.model}`);
console.log(`  ��'�� �������: ${carWithMinVolume.engineVolume} �`);



//12. �������� � ������
// �������� �������� �����
let num1 = prompt("������ ����� �����:");
let num2 = prompt("������ ����� �����:");
let num3 = prompt("������ ���� �����:");
let num4 = prompt("������ �������� �����:");
// ������� ��� ������ ������ ���� �����
function findMin(a, b) {
    return (a < b) ? a : b;
}
// �������� � ������
let maxMin = findMin(findMin(num1, num2), findMin(num3, num4));
// ��������� ����������
console.log("�������� � ������:", maxMin);



//13. ������� �� �������� �����
// ����� �����������
let word = prompt("������ �����:");
// ������� �����
let wordLength = word.length;
// �������� �����
let reversedWord = "";
for (let i = wordLength - 1; i >= 0; i--) {
    reversedWord += word[i];
}
// ��������� ����������
console.log("������� �����:", wordLength);
console.log("�������� �����:", reversedWord);


//4. ϳ��������� ����� script.js �� ������� ����

//script.js:
// ĳ������ ����
alert("³���!"); // ³��� � ������������

let age = prompt("������ ��� ��:", 18); // ³��� � �������

if (confirm("�� ��� ���������� JavaScript?")) {
    console.log("������!");
} else {
    console.log("�����...");
}

//index.html:
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>����������� ������ 1</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>