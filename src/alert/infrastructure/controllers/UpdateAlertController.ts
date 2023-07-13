import { Request, Response } from "express";

import { UpdateAlertUseCase } from "../../application/UpdateAlertUseCase";

export class UpdateAlertController {
  constructor(readonly updateAlertsUseCase: UpdateAlertUseCase) {}
  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const alert = await this.updateAlertsUseCase.run(data.id);
      if (alert)
        //Code HTTP : 201 -> Creado
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
      //Code HTTP : 204 Sin contenido
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
