import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ClientsModule.register([{ name: 'ITEM_MICROSERVICE', transport: Transport.TCP }]),
            ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
