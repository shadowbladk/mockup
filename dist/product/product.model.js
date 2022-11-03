"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    user: { type: String, require: true },
    password: { type: String, require: true },
    age: { type: Number, require: true },
});
//# sourceMappingURL=product.model.js.map