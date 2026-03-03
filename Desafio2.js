// Desafio 2: Encontrar índice do maior e menor valor em um array
function encontrarMaiorMenor(array) {
  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[indiceMaior]) {
      indiceMaior = i;
    }
    if (array[i] < array[indiceMenor]) {
      indiceMenor = i;
    }
  }
  return { indiceMaior, indiceMenor };
}
console.log("Maior e menor:", encontrarMaiorMenor([10, 3, 25, 7, 18])); // { indiceMaior: 2, indiceMenor: 1 }
