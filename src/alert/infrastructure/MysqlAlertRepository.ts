import { query } from "../../database/mysql";
import { Alert } from "../domain/Alert";
import { AlertRepository } from "../domain/AlertRepository";

export class MysqlAlertRepository implements AlertRepository {
  async getAll(): Promise<Alert[] | null> {
    const sql = "SELECT * FROM alerts";
    try {
      const [data]: any = await query(sql, []);
      const dataAlerts = Object.values(JSON.parse(JSON.stringify(data)));

      return dataAlerts.map(
        (alert: any) =>
          new Alert(
            alert.id,
            alert.type,
            alert.description,
            alert.dateTime,
            alert.severity,
            alert.status,
            alert.affectedUserId
          )
      );
    } catch (error) {
      return null;
    }
  }

  async createAlert(
    type: string,
    description: string,
    dateTime: string,
    severity: string,
    status: string,
    affectedUserId: string
  ): Promise<Alert | null> {
    const sql =
      "INSERT INTO alert (type, description, dateTime, severity, status, affectedUserId) VALUES (?, ?, ?, ?, ?, ?)";
    const params: any[] = [type, description, dateTime,severity,status,affectedUserId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Alert(result.insertId,type, description, dateTime,severity,status,affectedUserId);
    } catch (error) {
      return null;
    }
  }
}
