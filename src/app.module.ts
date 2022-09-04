import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://neopopa:919neo6519neo@cluster0.kyhobey.mongodb.net/?retryWrites=true&w=majority'),
    CatModule],

})
export class AppModule { }
