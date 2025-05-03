import { Item } from "../models/Item";

export class PriceList {
  private prices: Record<Item, number> = {
    Apple: 35,
    Banana: 20,
    Melon: 50,
    Lime: 15,
  };

  getPrice(item: Item): number {
    return this.prices[item];
  }
}