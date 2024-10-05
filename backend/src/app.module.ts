import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProdutoModule } from './produto/produto.module';
import { ProdutoController } from './produto/produto.controller';
import { DbModule } from './db/db.module';

@Module({
  imports: [ProdutoModule, DbModule],
  controllers: [AppController, ProdutoController],
  providers: [],
})
export class AppModule {}
