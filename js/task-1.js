// // const result = alert("Заповніть всі поля");
// // console.log(result); Information

// const result = prompt("login"); string or null
// console.log(result); input

// const result = confirm("18?"); true or false
// console.log(result); two variants for answer



// УМОВА
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// РІШЕННЯ
// const number = Number(prompt('Введіть будь ласка число...'));

// // if (number === 10) {
// //     alert('Вірно')
// // } else {
// //     alert('Невірно')
// // }
// //  |умова| ? |код, якщо true| : |код, якщо false|
// number === 10 ? alert('Вірно') : alert('Невірно')

// Написати функцію getUserInfo, яка приймає ім'я та вік користувача і повертає інформацію про нього у вигляді рядка.
// console.log(getUserInfo('Anna', 25))
// // 'Anna is 25 years old.'

// console.log(getUserInfo('John', 30))
// // 'John is 30 years old.'

// function getUserInfo(name, age) {
//     // інструкція
//     return `${name} is ${age} years old`;
// }
// const result = getUserInfo('Anna', 25);
// console.log(result)
// // виклик функції
//  console.log(getUserInfo('Anna', 25)
// console.log(getUserInfo('John', 30)





// ЗАДАЧА 03
// Написати функцію convertMinutesToSeconds, яка приймає кількість хвилин і повертає кількість секунд.
// console.log(convertMinutesToSeconds(1)) // 60
// console.log(convertMinutesToSeconds(5)) // 300
// console.log(convertMinutesToSeconds(10)) // 600

// function convertMinutesToSecondsconvertMinutesToSeconds(minutes) {
//         return minutes * 60
//     }
//  console.log(convertMinutesToSeconds(1)) // 60
//   console.log(convertMinutesToSeconds(5)) // 300
//   console.log(convertMinutesToSeconds(10)) // 600

//   ЗАДАЧА 04
// Написати функцію getProductCount, яка приймає рядок із кількістю товарів та повертає ціле число.
// console.log(getProductCount('15 items')) // 15
// console.log(getProductCount('8 products')) // 8
// console.log(getProductCount('100 pieces')) // 100

// function getProductCount(itemQuantity) {
// return parseInt (itemQuantity)
// }

// console.log(getProductCount('15 items')) // 15
// console.log(getProductCount('8 products')) // 8
// console.log(getProductCount('100 pieces')) // 100

// ЗАДАЧА 05
// Написати функцію convertToInteger, яка приймає рядок і повертає ціле число за допомогою parseInt().
// console.log(convertToInteger('25')) // 25
// console.log(convertToInteger('100.75')) // 100
// console.log(convertToInteger('42px')) // 42

// function convertToInteger(string) {
//     return Math.celi (parseFloat(string))
// }
// console.log(convertToInteger('25')) // 25
// console.log(convertToInteger('100.75')) // 100
// console.log(convertToInteger('42px')) // 42


// ЗАДАЧА 06
// Написати функцію sumStrings, яка приймає два рядки з цілими числами, перетворює їх на числа та повертає суму.
// console.log(sumStrings('10', '20')) // 30
// console.log(sumStrings('15', '5')) // 20
// console.log(sumStrings('100', '200')) // 300

// function sumStrings(num1, num2) {
//     return Number(num1) + Number(num2)
//     // return num1 + num2
// }
// console.log(sumStrings('10', '20')) // 30
// console.log(sumStrings('15', '5')) // 20
// console.log(sumStrings('100', '200')) // 300

// ЗАДАЧА 07
// Написати функцію greet, яка приймає ім'я та повертає привітання. Якщо ім'я не передано, використовувати значення Guest.
// console.log(greet('Anna')) // 'Hello, Anna!'
// console.log(greet('Max')) // 'Hello, Max!'
// console.log(greet()) // 'Hello, Guest!'
// function greet(name = 'Guest') {
//     return `Hello, ${name}`;
// }
// console.log(greet('Anna')) // 'Hello, Anna!'
// console.log(greet('Max')) // 'Hello, Max!'
// console.log(greet()) // 'Hello, Guest!'

// Задача 08
// Написати функцію getPurchaseInfo, яка приймає назву товару, його ціну та кількість. Функція повинна повертати рядок із загальною вартістю покупки.
// console.log(getPurchaseInfo('Book', 20, 3))
// // 'You bought 3 Book(s). Total: 60 USD.'

// console.log(getPurchaseInfo('Pen', 5, 4))
// // 'You bought 4 Pen(s). Total: 20 USD.'


// function getPurchaseInfo(name, price, quantity) {
//     const totalPrice = quantity * price;
//     return `You bought ${quantity} ${name}(s). Total: ${totalPrice} USD.`;
// }

// Написати функцію getAverageGrade, яка приймає три оцінки та повертає середній бал, округлений до двох знаків після коми.
// console.log(getAverageGrade(10, 9, 8)) // '9.00'
// console.log(getAverageGrade(12, 10, 9)) // '10.33'
// console.log(getAverageGrade(7, 8, 10)) // '8.33'

// ЗАДАЧА 09
