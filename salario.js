const input = gets();

let salary = Number(input);

let percent;

if ( salary < 401 ) {
  percent = 15;
} else if ( salary < 801 ) {
  percent = 12;
} else if ( salary < 1201  ) {
  percent = 10;
} else if ( salary < 2001 ) {
  percent = 7;
} else {
  percent = 4;
}

const reajust = (percent/100) * salary;
const newSalary = salary + reajust;
console.log("Novo salario: " + newSalary.toFixed(2));
console.log("Reajuste ganho: " + reajust.toFixed(2));
console.log("Em percentual: " + percent + " %");