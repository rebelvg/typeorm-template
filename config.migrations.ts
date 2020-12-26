import { DATABASE } from './src/config';

const {
  type,
  host,
  port,
  database,
  username,
  password,
  logging,
  synchronize,
  ssl,
} = DATABASE;

const entities = [__dirname + '/src/models/**/*.{ts,js}'];
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
