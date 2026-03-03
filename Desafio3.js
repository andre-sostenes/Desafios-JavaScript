// Desafio 3: Retornar a soma de todos os múltiplos de 5 ou 7 abaixo de 1000
function somaMultiplos() {
  let soma = 0;

  for (let i = 1; i < 1000; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      soma += i;
    }
  }
  return soma;
}
console.log("Soma de múltiplos de 5 ou 7:", somaMultiplos()); // 156361
