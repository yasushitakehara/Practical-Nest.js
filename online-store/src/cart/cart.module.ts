import { Module } from "@nestjs/common";
import { CartController } from "../cart/cart.controller";

@Module({
  controllers: [CartController],
})
export class CartModule {}
