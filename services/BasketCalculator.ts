import { Buy3Get2 } from "../discount/Buy3Get2";
import { BuyOneGetOneFree } from "../discount/BuyOneGetOneFree";
import { NoDiscount } from "../discount/NoDiscount";
import { Item } from "../models/Item";
import { PriceList } from "../pricing/PriceList";

export class BasketCalculator {
  private priceList = new PriceList();
  
  private discountMap: Record<Item, any> = {
    Apple: new NoDiscount(),
    Banana: new NoDiscount(),
    Melon: new BuyOneGetOneFree(),
    Lime: new Buy3Get2(),
    Guava: new Buy1Get1()
  };

  calculate(basket: string[]): number {
    const counts = this.countItems(basket);
    let total = 0;

    for (const item in counts) {
      const typedItem = item as Item;
      const price = this.priceList.getPrice(typedItem);
      const strategy = this.discountMap[typedItem];
      total += strategy.applyDiscount(counts[typedItem], price);
    }

    return total;
  }

  private countItems(basket: string[]): Record<Item, number> {
    const counts: Record<Item, number> = {
      Apple: 0,
      Banana: 0,
      Melon: 0,
      Lime: 0,
    };
  
    for (const item of basket) {
      if (item in counts) {
        counts[item as Item]++;
      } else {
        console.warn(`Skipping unknown item: ${item}`);
      }
    }
  
    return counts;
  }
}
