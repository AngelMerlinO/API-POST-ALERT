import { Alert } from "../domain/Alert";
import { AlertRepository } from "../domain/AlertRepository";

export class UpdateAlertUseCase {
  constructor(readonly alertRepository: AlertRepository) {}

  async run(id: number): Promise<Alert | null> {
    try {
      const alert = await this.alertRepository.updateAlert(id);
      return alert;
    } catch (error) {
      return null;
    }
  }
}
