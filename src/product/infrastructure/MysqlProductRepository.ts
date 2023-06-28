import { query } from "../../database/mysql";
import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class MysqlProductRepository implements ProductRepository {
  async getAll(): Promise<Product[] | null> {
    const sql = "SELECT * FROM alerts";
    try {
      const [data]: any = await query(sql, []);
      const dataProducts = Object.values(JSON.parse(JSON.stringify(data)));

      return dataProducts.map(
        (product: any) =>
          new Product(
            product.id,
            product.type,
            product.description,
            product.dateTime,
            product.severity,
            product.status,
            product.affectedUserId
          )
      );
    } catch (error) {
      return null;
    }
  }

  async createProduct(
    type: string,
    description: string,
    dateTime: string,
    severity: string,
    status: string,
    affectedUserId: string
  ): Promise<Product | null> {
    const sql =
      "INSERT INTO product (type, description, dateTime, severity, status, affectedUserId) VALUES (?, ?, ?, ?, ?, ?)";
    const params: any[] = [type, description, dateTime,severity,status,affectedUserId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new Product(result.insertId,type, description, dateTime,severity,status,affectedUserId);
    } catch (error) {
      return null;
    }
  }
}
