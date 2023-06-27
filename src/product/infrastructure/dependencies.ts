import { CreateProductUseCase } from "../application/CreateProductUseCase";
import { CreateProductController } from "./controllers/CreateProductController";
import { MysqlProductRepository } from "./MysqlProductRepository";

export const mysqlProductRepository = new MysqlProductRepository();
export const createProductUseCase = new CreateProductUseCase(
  mysqlProductRepository
);

export const createProductController = new CreateProductController(
  createProductUseCase
);

