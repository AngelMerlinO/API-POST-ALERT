import { CreateAlertUseCase } from "../application/CreateAlertUseCase";
import { CreateAlertController } from "./controllers/CreateAlertController";
import { MysqlAlertRepository } from "./MysqlAlertRepository";

export const mysqlAlertRepository = new MysqlAlertRepository();
export const createAlertUseCase = new CreateAlertUseCase(
  mysqlAlertRepository
);

export const createAlertController = new CreateAlertController(
  createAlertUseCase
);

