export interface IDiscountStrategy {
  applyDiscount(count: number, price: number): number;
}