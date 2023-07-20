import { Request, Response } from "express";

import { GetAlertsUseCase } from "../../application/GetAlertsUseCase";

export class GetAlertsController {
  constructor(readonly getAlertsUseCase: GetAlertsUseCase) { }

  async run(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const alert = await this.getAlertsUseCase.run(parseInt(id));

      if (alert)
        res.status(201).send({
          status: "success",
          data: {
            alert
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible obtener las alertas",
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
