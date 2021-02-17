// ======================================================================
//                                 ОСНОВЫ
// ======================================================================


// ======================================================= 1 Переменные

// variable (var) - переменная, которую можно изменять (устарело)
// constanta (const) - переменная, которую нельзя изменять
// let - новая альтернатива var

// const firstName = 'Vlad' //String
// const lastName = 'Averin' //String
// const age = 20 //number
// const isProgrammer = true //boolean

// console.log(isProgrammer)

// Зарезервированные слова для названий переменных - if, byte, short, int, long.
// Нельзя начинать название переменной с числа
// Нельзя использовать логические значения - true и false

// ========================================== 2 Мутирование типов данных

// console.log('Имя человка: ' + firstName + ', а возраст: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// ========================================================= 3 Операторы
// Операторы математические: + - * /
// ++(переменная) или (переменная)++ - инкреминтация значения
// --(переменная) или (переменная)-- - декрементация значения
// 'c += a' = 'c = c + a' - сокращенная запись

// let currentYear = 2020
// const birthYear = 2000

// const age = currentYear - birthYear

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c += a

// console.log(c)

// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(++currentYear)

// ======================================================= 4 Типы данных

// // Примитивы
// const isProgrammer = true
// const firstName = 'Vlad'
// const age = 20
// let x
// null
// // ----------

// console.log(typeof isProgrammer) // boolean
// console.log(typeof firstName) // string
// console.log(typeof age) // number
// console.log(typeof x) // undefind
// console.log(typeof null) //object (БАГ)
// console.log(null) //null

// ============================================== 5 Приоритет операторов
// >, <, >=, <= - операторы сравнения

// const fullAge = 20
// const birthYear = 2000
// const currentYear = 2020

// const isFullAge = currentYear - birthYear >= fullAge

// console.log(isFullAge)

// ================================================ 6 Условные операторы

// const courseStatus = 'fail' //ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс готов, и его можно потреблять')

// } else if (courseStatus === 'pending') {
//     console.log('Курс в разработке, он пока что не готов')

// } else {
//     console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
//     console.log("Все готово!") // Можно написать без ===
// } else {
//     console.log('Все не готово!')
// }


// Другая запись примера выше (тернарное выражение)
// isReady ? console.log('Все готово') : console.log('Все не готово')

// const num1 = 42 //number
// const num2 = '42' //string

// console.log(num1 === num2)


// ==================================================== 7 Булевая логика

// Логический оператор && (И) если одно из значений false, то будет false.

// console.log(true && false) //false
// console.log(false && true) //false
// console.log(false && false) //false
// console.log(true && true) //true

// Логический оператор || (ИЛИ) если одно из значений true, то будет true.

// console.log(true || false) // true
// console.log(false || true) // true
// console.log(true || true) // true
// console.log(false || false) // false

// Логический оператор ! (НЕ) выводит противоположное булевое значение
// Можно применять несколько раз

// console.log(!true) //false
// console.log(!false) //true

// =========================================================== 8 Функции

// function calculatedAge(year) {
//     return 2020 - year
// }

// // console.log(calculatedAge(2000))

// function logInfoAbout(name, year) {
//     const age = calculatedAge(year)

//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' имеет возраст ' + age)

//     } else if (age < 0) {
//         console.log('Человек по имени ' + name + ' указал не правильную дату рождения')

//     }
// }

// logInfoAbout('Vlad', 2021)

// =========================================================== 9 Массивы

// const cars = ['Mazda', 'Mersedes', 'Ford'] // Правильный вариант

// // const cars = new Array('Мазда', 'Мерседес', 'Форд') // Не правильный вариант

// console.log(cars.length) // Узнаем длинну массива (колл. элементов)

// console.log(cars[1]) // Обращаемся к индексу массива
// console.log(cars[0]) // Обращаемся к индексу массива
// console.log(cars[2]) // Обращаемся к индексу массива

// cars[0] = 'Porsche'
// cars[3] = 'Mazda'

// console.log(cars)

// ============================================================ 10 Циклы

// const cars = ['Mazda', 'Mersedes', 'Ford', 'Porsche']

// for (let i = 0; i < cars.length; i++) { // 1 вариант записи

//     const car = cars[i]
//     console.log(car)

// }

// for (car of cars) { // 2 вариант записи

//     console.log(car)

// }

// ========================================================== 11 Объекты

// // Объект!
// const person = {
//     firstName: 'Veronika',
//     lastName: 'Shkyrskaya',
//     year: '1999',
//     languages: ['Ru', 'Eng', 'Blr'],
//     hasWife: false,
//     greet: function () { // Добавление функции в объект
//         console.log('Привет')
//     }
// }


// // Вариант, как можно обращаться к элементам объекта

// person.greet() // без console.log
// console.log(person.firstName) // через точку (.firstName)
// console.log(person['lastName']) // через скобки ['string']

// //

// const key = 'languages' // задать переменную
// console.log(person[key]) // делается для изменения данных

// person.hasWife = true //изменение данных объекта за его пределами
// person.isProgrammer = true // Добавление данных в объект за его пределами






















