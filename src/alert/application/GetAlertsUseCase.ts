import { Alert } from "../domain/Alert";
import { AlertRepository } from "../domain/AlertRepository";

export class GetAlertsUseCase{
    constructor(readonly alertRepository:AlertRepository){}

    async run(
        id: number,
      ): Promise<Alert | null> {
        try {
          const alert = await this.alertRepository.getAlerts(
            id
          );
          return alert;
        } catch (error) {
          return null;
        }
      }

}