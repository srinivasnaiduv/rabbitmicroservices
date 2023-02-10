import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(
    @Inject('ITEM_MICROSERVICE') private readonly client: ClientProxy
  ) {}
  
  getHello(): string {
    this.client.emit('user_created',2);
    console.log("user_created");

    return 'Hello World! hii';
  }

  getItemById(id: number) {
    
    return this.client.send({ role: 'item' }, id); 
  }
}

