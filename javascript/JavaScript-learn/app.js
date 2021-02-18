// ========================== Number + BigInt ==========================

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
console.log(Number.parseFloat(stringFloat) - -0.4)
console.log(Number(stringFloat) - -0.4)
console.log(+stringFloat - -0.4)

// 2:02:15



