import * as mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    user?: string;
    password?: string;
    age?: number;
}>;
export interface Product extends mongoose.Document {
    id: string;
    user: string;
    password: string;
    age: number;
}
