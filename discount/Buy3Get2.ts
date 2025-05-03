import { IDiscountStrategy } from "./IDiscountStrategy";

export class Buy3Get2 implements IDiscountStrategy {
    applyDiscount(count: number, price: number): number {
      return (count - Math.floor(count / 3)) * price;
    }
  }