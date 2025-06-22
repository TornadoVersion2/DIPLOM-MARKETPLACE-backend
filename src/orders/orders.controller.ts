import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }


  // @Post('/bulk')
  // createBulk(@Body() createOrderDto: CreateOrderDto[]) {
  //   return this.ordersService.createBulk(createOrderDto)
  // }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto)
  }

  @Get()
  findAll() {
    return this.ordersService.findAll()
  }

  @Get('order/:id')
  findById(@Param('id') id: string) {
    return this.ordersService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id)
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.ordersService.findByUser(+userId)
  }

  @Get('history/user/:userId')
  findHistoryByUser(@Param('userId') userId: string) {
    return this.ordersService.findHistoryByUser(+userId)
  }

  @Get('manager/:managerId')
  findByManager(@Param('managerId') managerId: string) {
    console.log("managerId: ", managerId)
    return this.ordersService.findByManager(+managerId)
  }

  @Get('history/manager/:managerId')
  findHistoryByManager(@Param('managerId') managerId: string) {
    return this.ordersService.findHistoryByManager(+managerId)
  }
} 