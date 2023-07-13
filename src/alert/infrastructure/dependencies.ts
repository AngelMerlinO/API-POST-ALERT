import { CreateAlertUseCase } from "../application/CreateAlertUseCase";
import { GetAlertsUseCase } from "../application/GetAlertsUseCase";
import { UpdateAlertUseCase } from "../application/UpdateAlertUseCase";
import { CreateAlertController } from "./controllers/CreateAlertController";
import { GetAlertsController } from "./controllers/GetAlertsControllers";
import { UpdateAlertController } from "./controllers/UpdateAlertController";
import { MysqlAlertRepository } from "./MysqlAlertRepository";
export const mysqlAlertRepository = new MysqlAlertRepository();

export const createAlertUseCase = new CreateAlertUseCase(mysqlAlertRepository);

export const createAlertController = new CreateAlertController(
  createAlertUseCase
);
export const getAlertsUseCase = new GetAlertsUseCase(mysqlAlertRepository);
export const getAlertsController = new GetAlertsController(getAlertsUseCase);

export const updateAlertsUseCase = new UpdateAlertUseCase(
  mysqlAlertRepository
);
export const updateAlertController = new UpdateAlertController(
  updateAlertsUseCase
);
