import { BasketCalculator } from "./services/BasketCalculator";
import { Item } from "./models/Item";

const basket: Item[] = ["Apple","Apple","Apple", "Apple", "Banana", "Melon", "Melon", "Melon", "Lime", "Lime", "Lime"];

const calculator = new BasketCalculator();
const total = calculator.calculate(basket);

console.log(`Total price: ${(total / 100).toFixed(2)}`);
