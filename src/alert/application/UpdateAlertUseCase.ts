import { Alert } from "../domain/Alert";
import { AlertRepository } from "../domain/AlertRepository";

export class UpdateAlertUseCase {
  constructor(readonly alertRepository: AlertRepository) {}

  async run(id: number): Promise<Alert | null> {
    try {
      const alert = await this.alertRepository.updateAlert(id);
      console.log(`🤨😶🤐|| 🥓 file: UpdateAlertUseCase.ts:10 🥓 UpdateAlertUseCase 🥓 run 🥓 alert||`, alert)
      return alert;
    } catch (error) {
      return null;
    }
  }
}
