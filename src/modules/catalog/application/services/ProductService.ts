import { Product } from "../../domain/entities/Product";
import { IProductRepository } from "../../domain/repositories/ProductRepository";

export class ProductService {
  constructor(private productRepository: IProductRepository) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productRepository.getAll();
  }

  async getProductById(id: string): Promise<Product | null> {
    return this.productRepository.findById(id);
  }
}