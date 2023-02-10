import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/item/:id')
  getById(@Param('id') id: number) {
    console.log("item id called");
    return this.appService.getItemById(id);
  }
}
