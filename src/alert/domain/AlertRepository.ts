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
}
