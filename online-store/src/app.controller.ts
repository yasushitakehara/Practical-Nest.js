import { Controller, Get, Render } from '@nestjs/common';
//import { AppService } from './app.service';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}

  //  @Get()
  //  getHello(): string {
  //    return '<b>Hello World2!</b>';
  //  }
  @Get("/")
  @Render('index')
  index(){}
}
