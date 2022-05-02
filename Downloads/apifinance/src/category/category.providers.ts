import { Connection } from 'typeorm';
import { Category } from './category.entity';

export const enderecoProviders = [
  {
    provide: 'ENDERECO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Category),
    inject: ['DATABASE_CONNECTION'],
  },
];