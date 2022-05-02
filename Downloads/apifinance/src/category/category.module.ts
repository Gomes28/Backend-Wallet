import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { TokenModule } from 'src/token/token.module';
import { DatabaseModule } from '../database/database.module';
import { CategoryController } from './category.controller';
import { enderecoProviders } from './category.providers';
import { CategoryService } from './category.service';

@Module({
  imports: [DatabaseModule, TokenModule],
  controllers: [CategoryController],
  providers: [
    ...enderecoProviders,
    CategoryService,
  ],
  exports: [CategoryService]
})
export class CategoryModule {}