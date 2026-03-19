const calcularMDC = require("../../mdc");

test("MDC entre 48 e 18 deve ser 6", () => {
  expect(calcularMDC(48, 18)).toBe(6);
});

test("MDC entre 20 e 8 deve ser 4", () => {
  expect(calcularMDC(20, 8)).toBe(4);
});

test("MDC entre 7 e 3 deve ser 1", () => {
  expect(calcularMDC(7, 3)).toBe(1);
});
