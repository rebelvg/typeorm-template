import { Connection, createConnection, Repository } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { DATABASE } from '../config';

let connection: Connection | undefined;

export async function getRepositoryByModel<TEntity>(
  model: Function,
): Promise<Repository<TEntity>> {
  const connection = await getConnection();

  return connection.getRepository<TEntity>(model);
}

export async function getConnection(): Promise<Connection> {
  if (!connection) {
    connection = await createConnection(DATABASE as PostgresConnectionOptions);
  }

  return connection;
}
