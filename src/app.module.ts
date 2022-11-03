import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb+srv://neopopa:919neo6519neo@cluster0.kyhobey.mongodb.net/?retryWrites=true&w=majority')],
})
export class AppModule { }
