import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';


interface iUser {
  userId: number,
  itemName: string
}

interface iUserWithId extends iUser {
  id: number;
}


@Controller('/orders')
export class OrdersController {
  constructor(private readonly appService: OrdersService) { }

  @Get()
  getItem(): iUserWithId[] | string {
    try {
      return this.appService.getAllItem();
    } catch (error) {
      return error.message
    }
  }

  @Post()
  postItem(@Body() obj: iUser): iUserWithId[] | string {
    try {
      return this.appService. createItem(obj);
    } catch (error) {
      return error.message
    }

  }

}
