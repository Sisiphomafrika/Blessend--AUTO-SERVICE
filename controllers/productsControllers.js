import express from 'express'
import bodyParser from 'body-parser'
import {products} from '../model/index.js'
const productRouter = express.Router()
//fetch all products
productRouter.get('/',(req, res)=>{
    try{
        products.fetchProducts(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products'
        })
    }
})
//fetch product (single)
productRouter.get('/:id',(req, res)=>{
    try{
        products.fetchProducts(req,res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a products'
        })
    }
    })
    productRouter.post('/addProduct',bodyParser.json(), (req, res)=>{
        try{
            products.addProduct(req, res)
        }catch(e) {
            res.json({
                status: req.statusCode,
                msg: 'Failed to add a new product'
            })
        }
    })
    export{
        productRouter
    }