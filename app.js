// // ============================= string ===============================

// const myName = 'Влад'
// const age = 20
// const sizePenis = 18

// function getSizePenis(min, max) {
//     return (Math.trunc(Math.random() * (max - min + 1) + min))
// }

// const output = 'Привет, меня зовут ' + myName + ', и мне ' + age + ' лет!'
// const output = `Привет, меня зовут ${myName}, и мне ${getAge()} лет!` // // Можно использовать функцию
// const output = `Привет, меня зовут ${myName}, и мне ${age < 21 ? 'false' : '20'} лет!` // // Можно исп. тернарные выражения
// const output = `Привет, меня зовут ${myName}, и у меня ${getSizePenis(19, 21) < 20 ? 'маленький пенис' : 'огромный хер'}.` // // Можно исп. тернарные выражения

// // В обратных скобках можно писать все что угодно, даже html. Все пробелы соблюдаются
// const output = `
// <div>Это div</div>
// <p>А это p</p>
// `

// const firstName = 'Влад'
// const string = '    password    '

// console.log(firstName.length) // // 4 - символов в string
// console.log(firstName.toUpperCase()) // // трансфрмирует все символы в верхний регистр в string
// console.log(firstName.toLowerCase()) // // трансформирует все символы в нижний регистр в string
// console.log(firstName.charAt(2)) // // a - указывает какой символ на позиции
// console.log(firstName.indexOf('ад')) // // 2 - указывает на какой позиции символ или группа символов (если не находит = -1)
// console.log(firstName.startsWith('Вл')) // // true - отвечает, стартует ли строка с вводных данных (чувствителен к регистру)
// console.log(firstName.startsWith('ад')) // // true - отвечает, заканчивается ли строка с вводных данных (чувствителен к регистру)
// console.log(firstName.toLowerCase().startsWith('вл')) // // true - можно использовать несколько методов в строке
// console.log(firstName.repeat(3)) // // ВладВладВлад - повторяет вводные данные
// console.log(string) // // '----password----' - пробел так же является частью строки
// console.log(string.trim()) // // 'password' - очищает строку от пробелов (исп в строках с паролями)
// console.log(string.trimLeft()) // // 'password----' - очищает строку от пробелов слева
// console.log(string.trimRight()) // // '----password' - очищает строку от пробелов справа

// НИХУЯ НЕ ПОНЯЛ !!!

const personName = 'Влад'
const personName2 = 'Макс'
const personAge = 20
const personAge2 = -20

function logPerson(s, name, age) {
    if (age < 0) {
        age = ', тебя тут не ждали'
    }

    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const output = logPerson`Имя: ${personName} | Возраст: ${personAge} | !`
const output2 = logPerson`${personName2}${personAge2}!`

console.log(output)
console.log(output2)


// Пересмотреть с 2:34:58




