import { Request, Response } from "express";

import { UpdateAlertUseCase } from "../../application/UpdateAlertUseCase";

export class UpdateAlertController {
  constructor(readonly updateAlertsUseCase: UpdateAlertUseCase) {}
  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const alert = await this.updateAlertsUseCase.run(data.id);
      console.log(`🤨😶🤐|| 🥓 file: UpdateAlertController.ts:11 🥓 UpdateAlertController 🥓 run 🥓 alert||`, alert)
      if (alert)
        res.status(201).send({
          status: "success",
          data: {
            alert,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible actualizar la alerta",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
