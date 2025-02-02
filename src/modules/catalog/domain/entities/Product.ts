export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public stock: number,
  ) {}

  updateStock(quantity: number): void {
    if (this.stock < quantity) {
      throw new Error('Not enough stock');
    }

    this.stock -= quantity;
  }
}