import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {

    @Prop()
    id: number;

    @Prop()
    name: string;

    @Prop()
    age: number;
}

export const CatSchema = SchemaFactory.createForClass(Cat);