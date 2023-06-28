import express from "express";

import { createAlertController } from "./dependencies";

export const alertRouter = express.Router();



alertRouter.post(
  "/",
  createAlertController.run.bind(createAlertController)
);
