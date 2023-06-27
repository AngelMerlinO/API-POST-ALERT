import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class CreateProductUseCase {
  constructor(readonly productRepository: ProductRepository) {}

  async run(
    type: string,
    description: string,
    dateTime: string,
    dateTime: string,
    severity: string,
    status: string,
    affectedUserId: string,
  ): Promise<Product | null> {
    try {
      const product = await this.productRepository.createProduct(
        type,
        description,
        dateTime,
        severity,
        status,
        affectedUserId
      );
      return product;
    } catch (error) {
      return null;
    }
  }
}
