import { Alert } from "./Alert";

export interface AlertRepository {
  createAlert(
    type: string,
    description: string,
    dateTime: string,
    severity: string,
    status: string,
    affectedUserId: string
  ): Promise<Alert | null>;

  getAlerts(id: number): Promise<Alert | null>;

  updateAlert(id: number): Promise<Alert | null>;
}
