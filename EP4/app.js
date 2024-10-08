const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const path = require('path')
const products = require("./data/products.json")
const app = express()
const port = process.env.PORT
const productRouter =express.Router()
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,"/public/")))
app.set("views","./src/views")
app.set("view engine","ejs")

app.get("/products_query",(req,res)=>{
    debug(req.query.product_id)
    res.render("product_list.ejs")
})
productRouter.route("/").get((req,res)=>{
    res.render("product_list.ejs",products)
})
app.use("/products_param",productRouter)
app.get('/',(req,res)=>{
    // assing every thing before render index.ejs
    const name="Suttisak"
    const lname="Leabprasert"
    const age=40
    const address="<p><b>889/16 หมู่ 11 ต.คลองด่าน <br> อ.บางบ่อ จ.สมุทรปราการ 10550<b></p>"
    const ArrCar=["Hyundia","Misu","Crv","Mobilio"]
    const accessory = [
        {
                accname:"Keyboard",
                accbrand:"RK",
                accmodel:"RK100",
                acccolor:"Black"
        },{
                accname:"Monitor",
                accbrand:"Lenovo",
                accmodel:"24Inc",
                acccolor:"Black"
        },{
                accname:"Speaker",
                accbrand:"microlab",
                accmodel:null,
                acccolor:"White"
        }]
        const products=[
        {
                id:"0001",
                name:"Mac Book Laptop computer",
                price:100,
                descript:"Free Bag!!!",
                image:"images/products/product1.png"
        },{
                id:"0002",
                name:"Gray Swether",
                price:101,
                descript:"Swether",
                image:"images/products/product2.png"
        },{
                id:"0003",
                name:"Sony head phone ANC",
                price:102,
                descript:"Has Anc too.",
                image:"images/products/product3.png"
        }
        ]
    res.render("index.ejs",{
        // send every thing to indexe.ejs
        name:name,
        lname:lname,
        age:age,
        address:address,
        car:ArrCar,
        acc:accessory,
        products:products
    })
})

app.listen(port,()=>{
    debug(`Listening on ${chalk.green(port)}`)
    debug(`Dirname work on directory after nodemon${__dirname}`)
})