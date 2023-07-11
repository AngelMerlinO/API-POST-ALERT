import { Request, Response } from "express";

import { CreateAlertUseCase } from "../../application/CreateAlertUseCase";
//import { Alert } from "../../domain/Alert";
export class CreateAlertController {
  constructor(readonly createAlertUseCase: CreateAlertUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const alert = await this.createAlertUseCase.run(
        data.type,
        data.description,
        data.dateTime,
        data.severity,
        data.status,
        data.affectedUserId
      );

      if (alert)
        //Code HTTP : 201 -> Creado
        res.status(201).send({
          status: "success",
          data: {
            id: alert?.id,
            type: alert?.type,
            description: alert?.description,
            dateTime: alert?.dateTime,
            severity: alert?.severity,
            status: alert?.status,
            affectedUserId: alert?.affectedUserId

          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
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
