import express from "express";
import { ProductController } from "../controllers/ProductController";
import { ProductService } from "../../application/services/ProductService"
import { PrsmProductRepository } from "../../infrastructure/repositories/PrsmProductRepository";

const router = express.Router();

const productRepo = new PrsmProductRepository();
const productService = new ProductService(productRepo);
const productController = new ProductController(productService);

// @ts-ignore
router.get('/products', productController.getAllProducts);
// @ts-ignore
router.get('/products/:id', productController.getProductById);

export default router;
