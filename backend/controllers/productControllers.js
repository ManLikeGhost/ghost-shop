import Product from '../models/productModels.js';
import asyncHandler from 'express-async-handler';




//@desc fetch all products
//@route GET /api/products all products
//@access Public

const getProducts = asyncHandler(async(req, res) => {
  const products = await Product.find({});
		res.json(products);
})




//@desc fetch products by ID
//@route GET /api/products/:id single product
//@access Public

const getProductById = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id);
		if (product) {
			res.json(product);
		} else {
			res.status( 404 )
			throw new Error('Product not Found')
		}
})


export {getProducts,getProductById }