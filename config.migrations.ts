import { DATABASE } from './config';

const {
  type,
  host,
  port,
  database,
  username,
  password,
  logging,
  synchronize,
  entities,
  ssl,
} = DATABASE;

const migrations = ['./migrations/**/*.ts'];
const cli = {
  migrationsDir: './migrations',
};

export {
  type,
  host,
  port,
  username,
  password,
  database,
  synchronize,
  logging,
  entities,
  migrations,
  cli,
  ssl,
};
