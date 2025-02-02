import { Request, Response } from "express";
import { ProductItemDTO } from "../../application/dto/ProductItemDTO";
import { ProductService } from "../../application/services/ProductService";

export class ProductController {
  constructor(private productService: ProductService) {}

  getAllProducts = async (
    // @ts-ignore
    request: Request,
    response: Response,
  ) => {
    const products = await this.productService.getAllProducts();
    return response.json({
      products: products?.map((product) => new ProductItemDTO(product.id, product.name, product.price)) || [],
    });
  }

  getProductById = async (
    request: Request,
    response: Response,
  ) => {
    const productId = request.params.id;
    const product = await this.productService.getProductById(productId);
    if (!product) return response.status(404).json({ message: "Product not found" });

    return response.json({
      product: new ProductItemDTO(product.id, product.name, product.price),
    });
  }
}