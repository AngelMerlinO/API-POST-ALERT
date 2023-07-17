import express from "express";

import { createAlertController, updateAlertController } from "./dependencies";
import { getAlertsController } from "./dependencies";

export const alertRouter = express.Router();

alertRouter.post("/", createAlertController.run.bind(createAlertController));

alertRouter.get("/:id", getAlertsController.run.bind(getAlertsController));

alertRouter.put("/", updateAlertController.run.bind(updateAlertController));
