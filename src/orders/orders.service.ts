import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { OrderStatus } from './types/order-status.enum'
// import { OrderStatus } from '@prisma/client'
import { ProductsService } from '../products/products.service'
import type { UpdateProductDto } from '../products/dto/update-product.dto'

@Injectable()
export class OrdersService {
    constructor(
        private prisma: PrismaService,
        private productsService: ProductsService
    ) { }

    async create(createOrderDto: CreateOrderDto) {
        const product = await this.productsService.findOne(createOrderDto.productId)
        if (!product) {
            throw new Error('Product not found')
        }
        if (product.quantity === 0) {
            throw new Error('Вы не можете заказать, т.к. товар закончился')
        }

        var updated_Product = product as UpdateProductDto
        updated_Product.quantity -= 1
        this.productsService.update(product.id, updated_Product)

        return this.prisma.order.create({
            data: {
                status: OrderStatus.PENDING,
                product: {
                    connect: {
                        id: createOrderDto.productId
                    }
                },
                user: {
                    connect: {
                        id: createOrderDto.userId
                    }
                },
                manager: {
                    connect: {
                        id: product.managerId
                    }
                }
            },
            include: {
                product: true,
                user: true,
                manager: true
            }
        })
    }

    async createBulk(createOrderDto: CreateOrderDto[]) {
        const orders = await Promise.all(
            createOrderDto.map(async (dto) => {
                const product = await this.productsService.findOne(dto.productId)
                if (!product) {
                    throw new Error(`Product with id ${dto.productId} not found`)
                }
                return {
                    ...dto,
                    status: OrderStatus.PENDING,
                    managerId: product.managerId
                }
            })
        )

        return this.prisma.order.createMany({
            data: orders
        })
    }

    async findAll() {
        return this.prisma.order.findMany({
            include: {
                product: true,
                user: true,
                manager: true
            }
        })
    }

    async findOne(id: number) {
        return this.prisma.order.findUnique({
            where: { id },
            include: {
                product: true,
                user: true,
                manager: true
            }
        })
    }

    async update(id: number, updateOrderDto: UpdateOrderDto) {
        return this.prisma.order.update({
            where: { id },
            data: {
                status: updateOrderDto.status,
                manager: updateOrderDto.managerId ? {
                    connect: {
                        id: updateOrderDto.managerId
                    }
                } : undefined
            },
            include: {
                product: true,
                user: true,
                manager: true
            }
        })
    }

    async remove(id: number) {
        return this.prisma.order.delete({
            where: { id }
        })
    }

    async findByUser(userId: number) {
        return this.prisma.order.findMany({
            where: { userId },
            include: {
                product: true,
                user: true,
                manager: true
            }
        })
    }

    async findHistoryByUser(userId: number) {
        return this.prisma.order.findMany({
            where: {
                userId,
                status: OrderStatus.COMPLETED
            },
            include: {
                product: true,
                user: true,
                manager: true
            }
        })
    }

    async findByManager(managerId: number) {
        return this.prisma.order.findMany({
            where: { managerId },
            include: {
                product: true,
                user: true,
                manager: true
            }
        })
    }

    async findHistoryByManager(managerId: number) {
        return this.prisma.order.findMany({
            where: {
                managerId,
                status: OrderStatus.COMPLETED
            },
            include: {
                product: true,
                user: true,
                manager: true
            }
        })
    }
} 