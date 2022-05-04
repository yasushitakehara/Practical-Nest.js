import {Controller, Get, Render} from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  //  @Get()
  //  getHello(): string {
  //    return '<b>Hello World2!</b>';
  //  }
  @Get('/')
  @Render('index')
  index() {
    const viewData = [];
    viewData['title'] = 'Home Page - Online Store';
    return {
      viewData: viewData,
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    const viewData = [];
    viewData['title'] = 'About us - Online Store';
    viewData['subtitle'] = 'About us';
    viewData['description'] = 'This is an about page ...';
    viewData['author'] = 'Developed by: Yasushi Takehara';
    const data1 = 'About us - Online Store';
    return {
      viewData: viewData,
    };
  }
}
