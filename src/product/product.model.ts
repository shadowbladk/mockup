import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    user: { type: String, require: true },
    password: { type: String, require: true },
    age: { type: Number, require: true },
});

export interface Product extends mongoose.Document {
    id: string,
    user: string,
    password: string,
    age: number,
}