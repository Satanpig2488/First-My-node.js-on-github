const express = require('express')
const productRouter =express.Router()
const products = require("../../data/products.json")
productRouter.route("/").get((req,res)=>{ // "/" as /products_param coz "/products_param"as productRouter)
    res.render("product_list.ejs",{products})
})
productRouter.route("/:id").get((req,res)=>{// "/:id" as /products_param/:id coz from  app.use("/products_param",productRouter)
    const id = req.params.id
    res.render("product.ejs",{id,products:products[1]})
})
module.exports=productRouter