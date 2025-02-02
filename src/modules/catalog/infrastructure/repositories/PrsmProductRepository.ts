import { prisma } from "../../../../config/prisma";
import { Product } from "../../domain/entities/Product"
import { IProductRepository } from "../../domain/repositories/ProductRepository";

export class PrsmProductRepository implements IProductRepository {
  async findById(id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({ where: { id } });
    return product ? new Product(product.id, product.name, product.price, product.stock) : null;
  }

  async save(product: Product): Promise<void> {
    await prisma.product.upsert({
      where: { id: product.id },
      update: { name: product.name, price: product.price, stock: product.stock, },
      create: { id: product.id, name: product.name, price: product.price, stock: product.stock, },
    });
  }

  async getAll(): Promise<Product[]> {
    const products = await prisma.product.findMany();
    return products?.map(p => new Product(p.id, p.name, p.price, p.stock)) || [];
  }
}