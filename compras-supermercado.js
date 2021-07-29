let totalItems = gets();

for (var i = 0; i < totalItems; i++) {
  let itens = gets();
  let itensOrdenados = itens.split(" ").sort();
  let itensUnicos = [... new Set(itensOrdenados)];
  
  itensUnicos.sort();
  let resposta = [...itensUnicos].join(" ");
  console.log(resposta);
}
