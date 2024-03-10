const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema
({
    _id: { type: Number, unique: true, required: true },
    name: String,
    desc : String,
    SKU : String,
    category:{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory' },
    inventory_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductInventory' },
    price : {type:Number,float:True},
    discount_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductDiscount' },
    created_at: Date,
    modified_at: Date,
    deleted_at: Date
})
const CategorySchema = new mongoose.Schema({
    _id: { type: Number, unique: true, required: true },
    name: String,
    desc : String,
    created_at: Date,
    modified_at: Date,
    deleted_at: Date
})
const InventorySchema = new mongoose.Schema({
    _id: { type: Number, unique: true, required: true },
    quantity:{type:Number,integer:tur},
    created_at: Date,
    modified_at: Date,
    deleted_at: Date
})
const DiscountSchema = new mongoose.Schema({
    _id: { type: Number, unique: true, required: true },
    name: String,
    desc : String,
    discount_percentage:{type:Number,float:True},
    active:Boolean,
    created_at: Date,
    modified_at: Date,
    deleted_at: Date
})
const Product = mongoose.model('Product', ProductSchema);
const ProductCategory = mongoose.model('ProductCategory', CategorySchema);
const ProductInventory = mongoose.model('ProductInventory', InventorySchema);
const Discount = mongoose.model('Discount', DiscountSchema);