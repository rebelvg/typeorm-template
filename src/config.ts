export const DATABASE = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'typeorm',
  username: 'typeorm',
  password: 'plaintextpassword',
  logging: true,
  synchronize: false,
  ssl: false,
  entities: [__dirname + '/models/*.{ts,js}'],
};
