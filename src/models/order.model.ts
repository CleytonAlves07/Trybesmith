import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/order.interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder<number[]>[]> {
    const result = await this.connection
      .execute(
        `SELECT Orders.id, Orders.userId, GROUP_CONCAT(Products.id) as productsIds
         FROM Trybesmith.Orders
         INNER JOIN Trybesmith.Products
         ON Orders.id = Products.orderId
         GROUP BY Orders.id
         ORDER BY Orders.userId`,
      );
      
    const [rows] = result;
    const results = rows as IOrder<string>[];
    
    const orders: IOrder<number[]>[] = results.map((order) => ({
      id: order.id,
      userId: order.userId,
      productsIds: order.productsIds.split(',').map((id) => Number(id)),
    }));
    
    return orders;
  }
}