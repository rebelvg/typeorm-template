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
  migrations,
  cli,
  ssl,
} = DATABASE;

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
