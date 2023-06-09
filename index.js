// # Модуль 1. Заняття 1. Змінні, типи та оператори

//Example 1 - Математичні оператори
// Виведи на екран загальну кількість всіх яблук. 
// кількість хороших яблук.
//const apples = 470;
//const badApples =135;
//const halfApples = 67;

//const harmfulApples = badApples + halfApples;
//console.log(harmfulApples);

//const goodApples = apples - harmfulApples;
//console.log(goodApples);

// ## Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором `+=`.
//let students = 100;
// students = students + 50;
//students += 50;
//console.log(students);

// ## Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної
// `result`.

//const result = 108 + 223 - 2 * 5;
//console.log(result);

// ## Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення
// змінної `value`. Використовуй методи `Math.floor()`, `Math.ceil()` та
// `Math.round()`. Перевір що буде в консолі при значеннях `27.3` та `27.9`.

//const value = 27.7;
//const rounded = Math.round(value);
//const roundedDown = Math.floor(value);
//const roundedUp = Math.ceil(value);
// ```
//console.log("Math.round", rounded);
//console.log("Math.roundedDown", roundedDown);
//console.log("Math.roundedUp", roundedUp);

// ## Example 5 - Шаблонні рядки

// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені в рядок.

// ```js
//const companyName = 'Cyberdyne Systems';
//const repairBots = 150;
//const defenceBots = 50;
//const totalBots = repairBots + defenceBots;
//const message = `${companyName} has ${totalBots} bots in stock`;
//console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього
// необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в
// вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді
// `24.7` або `24,7`, тобто як роздільник дробової частини може бути
// кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

/**
 * 1. Знайти квадрат зросту людини //Math.pow()
 * 2. Розділити вагу на квадрат зросту. // звичайне ділення
 * 3. Округлити фінальний результат
 * 
 * Зробили:
 * 1. Запитали користувача ввести значення ваги і зросту
 * 2. Замінили можливу кому на крапку
 * 3. Явно конвертували рядок в число
 * 4. Знайшли квадрат зросту
 * 5. Знайшли індекс маси тіла
 * 6. Форматували індекс маси тіла до одніє цифри після крапки
 * 7. Привели значення індексу маси тіла до числового типу
 */
// ```js

// let weight = '88,3';
// let height = '1.75';

// const weightInt = Number(prompt('Введіть вагу в кілограмах').replace(',','.'));
// const heightInt = Number(prompt('Введіть зріст в метрах').replace(',','.'));

// console.log("heightInt = ",heightInt)
// console.log("weightInt = ",weightInt)

// const heightPow = Math.pow(heightInt, 2);
// console.log(heightPow)

// const bmi = weightInt / heightPow;
// const roundedBmi = Number(bmi.toFixed(1));

// console.log(roundedBmi); // 28.8
// ```

// ## Example 7 - Оператори порівняння та приведення типів

// Яким буде результат виразів?
//console.log('\n==============');
//console.log(5 > 4); // true
//console.log(10 >= '7'); // true. 
//console.log('2' > '12'); // true. String порівнюються посимвольно по коду символа. Як отримати код символа https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
//console.log('2' < '12'); // false
//console.log('4' == 4); // true
//console.log('6' === 6); // false. 
//console.log('false' === false); // false
//console.log(1 == true);  // true. 
//console.log(1 === true); // false.
//console.log('0' == false); //true.
//console.log('0' === false); // false.
//console.log('Papaya' < 'papaya'); // true.
//const a = 'Papaya'.charCodeAt(0);
//const b = 'papaya'.charCodeAt(0);
//console.log(a,b)

//console.log('Papaya' === 'papaya'); // false. 
//console.log(undefined == null); // true.
//console.log(undefined === null); // false.
// ```
// ## Example 8 - Логічні оператори

// Яким буде результат виразів?
// && - Оператор приводить всі операнди до типу Boolean, і повертає перший який дасть false. Або останній, якщо false нема
// || - Оператор приводить всі операнди до типу Boolean, і повертає перший який дасть true. Або останній, якщо true нема
//console.log(true && 3); // 3
//console.log(false && 3); // false
//console.log(1 && null && 2); // null
//console.log(true && 0 && 'kiwi'); // 0
// true //true
// 0 // false
// 'kiwi' // true

//console.log(true || 3); // true
//console.log(true || 3 || 4); // true
//console.log(true || false || 7); // true
//console.log(null || 2 || undefined); // 2

//console.log((1 && null && 2) > 0); // false
// 1 // true
// null // false
// 2 // true
// null > 0
/**
 * 1. Виконується оператор в дужках (1 && null && 2) = null
 * 2. Виконуються порівняння null > 0
 */

//console.log(2 && 3); // 3
//console.log(null || (2 && 3) || 4); // 3
// 2 //true
// 3 //true
// 2 && 3 = 3

// null //false
// 3 // true
// 4 // true
/**
 * 1. Виконується оператор в дужках (2 && 3) = 3
 * 2. Виконується опеартор null || 3 || 4 = 3
 */



// ```

// ## Example 9 - Значення за замовчуванням та оператор нульового злиття

// Отрефактори код так, щоб у змінну `value` присвоювалося значення
// змінної `incomingValue`, якщо воно не рівне `undefined` або `null`. В
// іншому випадку має присвоюватися значення `defaultValue`. Перевір роботу
// скрипта для наступних значень змінної `incomingValue`: null, undefined, 0,
// false. Використовуй оператор `??` (nullish coalescing operator).

// ```js
//const incomingValue = null;
//const defaultValue = 10;
//const value1 = incomingValue ?? defaultValue;

//console.log(value1);
// ```

// ## Example 10 - Оператор % та методи рядків

// Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в
// рядок у форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

//const totalMinutes = 450;

//const hours = Math.floor(totalMinutes/60);
//const minutes = totalMinutes % 60;

//const formatedTime = `${String(hours).padStart(2, '0')}:${minutes}`;
//console.log(formatedTime);

//const string = 'abc';
//console.log(string.padStart(4, '5'))

// ```

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }


// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     clientCounter += 1;
//     console.log(clientCounter);
// }


// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// do {
//   console.log(clientCounter);
//   clientCounter += 1;
// } while(clientCounter < maxClients)


//#2

// знайти парні і не парні числа

//const userNumber = prompt("Enter number");
//if (userNumber % 2 === 0) {
//   console.log("Парне число");
//} else {
//    console.log("Не парне число");
//}

//збільшити число на 1
//let number =2;
//number = number + 1; //number = 2 + 1 //3
//ідентичний запис (кращий запис)
//number += 1;
//ідентичний запис (збільшення лише на 1)
//number ++;

//збільшення на 10
//number +=10;
//зменшення на 10
//number -=10;


/// if ----- switch
//const userNumber = prompt("Enter User Number");
//if (userNumber === 10) {
//console.log("ok");
//} else if (userNumber === 100) {
//    console.log("Good");
//} else {
 //   console.log("Bad");
//}

//switch (userNumber) {
 //   case 10:
 //       console.log("ok");
 //   break;
 //   case 100:
 //       console.log("Good");
 //       break;
//    default:
//        console.log("Bad");
//        break;
//}

//порівняння
//const userNumber = prompt("Enter User Number");
//if (userNumber < 10) {
//console.log("ok");
//} else if (userNumber > 100 && userNumber < 1000) {
//console.log("Good");
//} else {
//console.log("Bad");
//}
//щоб добраися до кейсів має бути строга правда
//switch (true) {
 //case userNumber < 10:
 //console.log("ok");
 //break;
 //case userNumber > 100 && userNumber < 1000:
 //console.log("Good");
 //break;
//default:
//console.log("Bad");
//break;
//}

///вивести в консоль числа від 1 до 10 кратні 2 (часта задача на СБ)
//for (let i = 1; i <=10; i += 1) {
    //if (i % 2 !== 0) {
//continue;
 //   }
 //   console.log(i);
//}

/// continue - пропускає/ігнорує
/// break - пририває
//for (let i = 1; i <=10; i += 1) {
 //   if (i === 5) {
  //      break;
 //   }
 //   console.log(i);
//}
// прописуємо switch для попереднього циклу
//for (let i = 1; i <=10; i += 1) {
//    switch (i) {
//        case 5:
//        break;
//        default:
//            break;
//    }    
//console.log(i);
//}

// ## Example 2 - Отображение времени (if...else)

// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки
// формата `"14 ч. 26 мин."`. Если значение переменной `minutes` равно `0`, то
// выводи строку `"14 ч."`, без минут.

//const hours = 14;
//const minutes = 26;
//let timeString;

//if (minutes === 0) {
//    timeString = `${hours} год`;
//} else {
//    timeString = `${hours}год ${minutes}хв`;
//}

// const minutes = 74; // 1 год 14 хв
// const minutes = 1023; // ?
// const minutesValue = minutes % 60;
// const hours = Math.floor(minutes / 60);
// console.log(`${hours}:${minutesValue}`);
// console.log(`${hours}год ${minutesValue}хв`);

// ## Example 8 - Цикл for

// Напиши цикл for который выводит в консоль браузера числа по возрастанию от `min`
// до `max`, но только если число кратное `5`.

// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// або (якщо мін значення кратне 5)
// for (let i = min; i <= max; i += 5) {
//   console.log(i);
// }

// do while - різниця
// приклад на умові попередньої задачі
//let i = min;
// while (i <= max) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
//   i += 1;
// }

// let i = min;
// do {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
//   i += 1;
// } while (i <= max);

// приклад використання - банкомат
// const password = "admin";
// let userPassword;

// do {
//   userPassword = prompt("Enter password");
//   console.log(userPassword);
// } while (userPassword !== password);

// Зациклення. Не існує сценарію для закінчення
// do {
//   userPassword = prompt("Enter password");
//   console.log(userPassword);
// } while (true);

///--------- Масиви------

/// Напиши скрипт для перебору масива 'fruits' циклом for.
// для кожного елементу масиву вивести в консоль строку в форматі 'номер елементаЖ значення едемента'
// нумерація починається із 1

// const fruits = ['яблуко', 'виноград', 'персик', 'банан', 'лимон'];
// for (let i = 0; i < fruits.length; i += 1) {
// const index = i + 1;
// const element = fruits[i];
// consol.log('${index}:${element}');
//}

// або
// for (let fruit of fruits) {
//const index = fruits.indexOf(fruit) +1;
//consol.log('${index}:${element}');
//}


// # Модуль 3. Занятие 1. Объекты

// ## Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта `user`, последовательно:

// - добавляет поле `mood` со значением `'happy'`
// - заменяет значение `hobby` на `'skydiving'`
// - заменяет значение `premium` на `false`
// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// ### Код

// ```js
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// ```

// ## Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// суммирования всех зарплат и сохраните результат в переменной sum. Должно
// получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// ### Код

// ```js
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// ```

// ## Example 3 - Массив объектов

// Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта

// ### Код

// ```js
// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];
// ```

// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };
// ```

// function processCall(recipient, onAvailable, onNotAvailable) {
// // Имитируем доступность абонента случайным числом
// const isRecipientAvailable = Math.random() > 0.5;

// if (!isRecipientAvailable) {
// onNotAvailable(recipient);
// return;
// }

// onAvailable(recipient);
// }

// function takeCall(name) {
// console.log(`Соединяем с ${name}, ожидайте...`);
// // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
// console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
// // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
// console.log(`Абонент ${name} недоступен, записываем голограмму.`);
// // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

// # Модуль 4. Занятие 7. Коллбеки. Стрелочные функции. forEach

// ## Example 1 - Коллбек функции

// Напишите следующие функции:

// - `createProduct(obj, callback)` - принимает объект товара без id, а также
//   колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в
//   свойство `id` и вызывает колбек передавая ему созданный обьект.
// - `logProduct(product)` - коллбек принимающий обьект продукта и логирующий его в
//   консоль
// - `logTotalPrice(product)` - коллбек принимающий обьект продукта и логирующий
//   общую стоимость товара в консоль

// ```js
// // Решение
// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// 1) Додати логіку генерації id
// 2) Навчити нашу ф-ю працювати з callback
// 3) callback має вміти приймати обєкт товара

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// function createProduct(product, callback) {
//   const id = Date.now();
//   const newProduct = { ...product, id };
//   //   product.id = id;
//   callback(newProduct);
//   // callback = logTotalPrice
//   // logTotalPrice(newProduct);
// }

// function logProduct(item) {
//   console.log(item);
// }

// function logTotalPrice(item) {
//   console.log(item.price * item.quantity);
//   return item.price * item.quantity;
// }

// ```
// ## Example 6 - Инлайн стрелочные функции

// Выполните рефакторинг кода используя стрелочные функции.

// ```js
// function each(array, callback) {
//   const newArray = [];
//   for (let el of array) {
//     const result = callback(el);
//     newArray.push(result);
//   }
//   return newArray;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );
// ```

