const numero = [1,4,8,6,3];


function verificaPar(valor) {
  if (valor % 2 === 0)
    return valor;
}

function verificaImpar(valor) {
  if (valor % 2 !== 0)
    return valor;
}

function verificaPositivos(valor) {
  if (valor > 0) {
    return valor;
  }
}
function verificaNegativos(valor) {
  if (valor < 0) {
    return valor;
  }
}

const pares = numero.filter(verificaPar);
const impares = numero.filter(verificaImpar);
const positivos = numero.filter(verificaPositivos);
const negativos = numero.filter(verificaNegativos);

console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");

console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");