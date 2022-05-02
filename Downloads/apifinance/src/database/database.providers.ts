import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'database-1.cnst3pbnlnku.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'Mat281106',
      database: 'FinanceAWS',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];