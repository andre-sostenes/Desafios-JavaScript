const somaMultiplos = require("../../soma");

test("Soma de múltiplos de 5 ou 7 abaixo de 1000 deve ser 156361", () => {
  expect(somaMultiplos()).toBe(156361);
});
