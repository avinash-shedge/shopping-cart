import { IDiscountStrategy } from "./IDiscountStrategy";

export class BuyOneGetOneFree implements IDiscountStrategy {
    applyDiscount(count: number, price: number): number {
      return Math.ceil(count / 2) * price;
    }
  }