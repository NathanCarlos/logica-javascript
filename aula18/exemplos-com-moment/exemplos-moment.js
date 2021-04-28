const data = moment();

console.log(moment().format());

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

console.log(moment("19951031", "YYYYMMDD").fromNow());

console.log(moment().format('LT'));   // 20:20
console.log(moment().format('LTS'));  // 20:20:39
console.log(moment().format('L'));    // 28/04/2021
console.log(moment().format('l'));    // 28/4/2021
console.log(moment().format('LL'));   // 28 de abril de 2021
console.log(moment().format('ll'));   // 28 de abr de 2021
console.log(moment().format('LLL'));  // 28 de abril de 2021 às 20:20
console.log(moment().format('lll'));  // 28 de abr de 2021 às 20:20
console.log(moment().format('LLLL')); // quarta-feira, 28 de abril de 2021 às 20:20
console.log(moment().format('llll'));


// console.log(data.subtract(10, 'days').calendar());
console.log(data.add(5, 'days').format());
