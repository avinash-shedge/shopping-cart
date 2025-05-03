import { BasketCalculator } from "../services/BasketCalculator";

describe("BasketCalculator", () => {
  const calculator = new BasketCalculator();

  test("calculates total with no items", () => {
    expect(calculator.calculate([])).toBe(0);
  });

  test("calculates total for simple basket", () => {
    const basket = ["Apple", "Banana"];
    expect(calculator.calculate(basket)).toBe(55);
  });

  test("basket with all items and offers", () => {
    const basket = [
      "Apple", "Apple",       
      "Banana",               
      "Melon", "Melon",       
      "Lime", "Lime", "Lime"
    ];
    expect(calculator.calculate(basket)).toBe(170);
  });


});
