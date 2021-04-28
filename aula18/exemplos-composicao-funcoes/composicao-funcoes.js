const parseNumber = number => parseFloat(number);
const mathRound = number => Math.round(number);

const number = prompt('Digite um número');

const numberParsed = mathRound(parseNumber(number));

console.log(numberParsed);

const compose = (fn1, fn2) => (...args) => fn2(fn1(...args));

const parseFloatAndAround = compose(parseFloat, Math.round);
const parseIntAndAround = compose(parseInt, Math.round);

console.log(parseFloatAndAround(number));
console.log(parseIntAndAround(number));

const composeMultiple = (...fns) => (...args) => {
    return fns.reduce((arg, fn) => {
        return fn(arg)
    }, ...args);
}

const trim = (valor) => valor.trim();

const trimAndParseFloatAndRound = composeMultiple(trim, parseFloat, Math.round);
const trimAndParseInt = composeMultiple(trim, parseInt);

console.log(trimAndParseFloatAndRound("  12.5  "));
console.log(trimAndParseInt("  15 "));

// const somaNumeros = (...numeros) => {
//     return numeros.reduce((acc, numero) => acc + numero, 0);
// }

// console.log(somaNumeros(10, 15, 20, 30, 50));