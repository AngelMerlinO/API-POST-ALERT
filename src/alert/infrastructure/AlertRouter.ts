import express from "express";

import { createAlertController } from "./dependencies";
import { getAlertsController } from "./dependencies";

export const alertRouter = express.Router();



alertRouter.post(
  "/",
  createAlertController.run.bind(createAlertController)
);

alertRouter.get(
  "/",
  getAlertsController.run.bind(getAlertsController)
);
