import { Request,Response } from "express";

import { GetAlertsUseCase } from "../../application/GetAlertsUseCase";

export class GetAlertsController{
    constructor(readonly getAlertsUseCase: GetAlertsUseCase){}

    async run(req: Request, res: Response) {
        const data = req.body;
        try {
          const alert = await this.getAlertsUseCase.run(
            data.id
          );
    
          if (alert)
            //Code HTTP : 201 -> Creado
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
          //Code HTTP : 204 Sin contenido
          res.status(204).send({
            status: "error",
            data: "Ocurrio un error",
            msn: error,
          });
        }
      }
}
