import { Product } from "./Product";

export interface ProductRepository {
  createProduct(
    type: string,
    description: string,
    dateTime: string,
    severity: string,
    status: string,
    affectedUserId: string
  ): Promise<Product | null>;
}
