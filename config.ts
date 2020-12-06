export const DATABASE = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'typeorm',
  username: 'typeorm',
  password: 'plaintextpassword',
  logging: false,
  synchronize: false,
  entities: [__dirname + '/src/models/**/*.{ts,js}'],
  ssl: false,
};
