// ==================== Number + BigInt + Math ======================

const num = 42
const float = 42.42 // Float - число содержит десятичную часть
const pow = 10e3 // pow - число в степени (10 в 3 степени)

console.log('MAX_SAFE_INTEGER ', Number.MAX_SAFE_INTEGER) //Максимальное число для работы
console.log('MIN_SAFE_INTEGER ', Number.MIN_SAFE_INTEGER) //Минимальное число для работы
console.log('Math.pow ', Math.pow(2, 53) - 1) // Максимальное число в степени


console.log('MAX_VALUE ', Number.MAX_VALUE) // Максимальное число для результата работы
console.log('MIN_VALUE ', Number.MIN_VALUE) // Минимальное значение для результата работы

console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY) // Бесконечность
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY) // Бесконечность отрицательная

console.log(Number.NaN) // Not A Number (является числом)
console.log(2 / undefined) // NaN

const weird = (2 / undefined) // NaN
console.log('isNaN weird ', Number.isNaN(weird)) // true
console.log('isFinity Infinity ', Number.isFinite(Infinity)) // false
console.log('isFinity 42 ', Number.isFinite(42)) // true

const stringInt = '40'
const stringFloat = '40.40'
console.log(stringInt + 2) // JS конкетенирует (складывает строки) все в строку

// Варианты преобразования строки в число (с целыми числами)
console.log(Number.parseInt(stringInt) + 2)
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)
//

// Варианты преобразования строки в число (с десятичными элементами)
console.log(Number.parseFloat(stringFloat) - 0.4)
console.log(Number(stringFloat) - 0.4)
console.log(+stringFloat - 0.4)

console.log(0.4 + 0.2) //0.6000000000000001
console.log((4 / 10) + (2 / 10)) //0.6000000000000001
console.log((0.4 + 0.2).toFixed(1)) //0.6
console.log(+(0.4 + 0.2).toFixed(1)) // Приводит строчку выше в число

// =========================== BigInt ===============================

// Нужен он для работы с числами, которые больше MAX_SAFE_INTEGER
// BigInt работает только с BigInt

console.log(900719925474099199999999n - 900719925474099199999999n) //0n
// console.log(900719925474099199999999.23n) //Error
// console.log(4n - 2) //Error
console.log(parseInt(4n) - 2) //2
console.log(4n - BigInt(2)) //2n
console.log(5n / 2n) //2n - BigInt только целое число

// ============================= Math ===============================

console.log(Math.E) // 2.718281828459045
console.log(Math.PI) // 3.141592653589793
console.log(Math.sqrt(25)) // 5 - корень из числа
console.log(Math.pow(5, 3)) // 125 - возведение вzx степень
console.log(Math.abs(-42)) // 42 - модуль числа
console.log(Math.max(32, 84, 12, 44)) // 84 - макс число
console.log(Math.min(32, 84, 12, 44)) // 12 - мин число
console.log(Math.floor(199.99)) // 199 - округляет в меньшую сторону
console.log(Math.ceil(199.99)) // 200 - округляет в большую сторону
console.log(Math.round(199.99)) // 200 - округляет в ближайшую сторону
console.log(Math.trunc(199.99)) // 199 - возвращает целое число
console.log(Math.random(199.99)) // 199 - возвращает целое число

// ===================== Math (практика) ============================

// Функция выдает рандомное число при внесении мин и макс значения
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomBetween(1, 100))

