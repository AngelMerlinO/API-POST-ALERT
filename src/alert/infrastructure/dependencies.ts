import { CreateAlertUseCase } from "../application/CreateAlertUseCase";
import { GetAlertsUseCase } from "../application/GetAlertsUseCase";
import { CreateAlertController } from "./controllers/CreateAlertController";
import { GetAlertsController } from "./controllers/GetAlertsControllers";
import { MysqlAlertRepository } from "./MysqlAlertRepository";
export const mysqlAlertRepository = new MysqlAlertRepository();

export const createAlertUseCase = new CreateAlertUseCase(mysqlAlertRepository);

export const createAlertController = new CreateAlertController(
  createAlertUseCase
);
export const getAlertsUseCase = new GetAlertsUseCase(mysqlAlertRepository);
export const getAlertsController = new GetAlertsController(getAlertsUseCase);
