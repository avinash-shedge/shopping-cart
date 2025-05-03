import { IDiscountStrategy } from "./IDiscountStrategy";

export class NoDiscount implements IDiscountStrategy {
    applyDiscount(count: number, price: number): number {       
      return count * price;
    }
  }