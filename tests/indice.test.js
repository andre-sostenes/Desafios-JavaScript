const encontrarMaiorMenor = require("../../indice");

test("Maior e menor em [10, 3, 25, 7, 18]", () => {
  const resultado = encontrarMaiorMenor([10, 3, 25, 7, 18]);
  expect(resultado).toEqual({ indiceMaior: 2, indiceMenor: 1 });
});

test("Maior e menor em [5, 9, 2]", () => {
  const resultado = encontrarMaiorMenor([5, 9, 2]);
  expect(resultado).toEqual({ indiceMaior: 1, indiceMenor: 2 });
});
