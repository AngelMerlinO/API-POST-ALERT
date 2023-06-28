import { Alert } from "../domain/Alert";
import { AlertRepository } from "../domain/AlertRepository";

export class CreateAlertUseCase {
  constructor(readonly alertRepository: AlertRepository) {}

  async run(
    type: string,
    description: string,
    dateTime: string,
    severity: string,
    status: string,
    affectedUserId: string,
  ): Promise<Alert | null> {
    try {
      const alert = await this.alertRepository.createAlert(
        type,
        description,
        dateTime,
        severity,
        status,
        affectedUserId
      );
      return alert;
    } catch (error) {
      return null;
    }
  }
}
