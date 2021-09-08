let count = 0;

for(x = 0; x < 6; x++) {
  valor = parseFloat(gets());
  if(valor > 0) {
    count++
  }
}

console.log(`${count} valores positivos`);

