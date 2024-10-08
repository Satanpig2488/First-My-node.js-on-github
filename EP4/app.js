const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const app = express()
const port = 3001
app.use(morgan('combined'))
app.get("/",(req,res)=>{
    res.send("Hello Borntodev ... . . .Togithub")
})
app.listen(port,()=>{
    console.log(`Listening on ${chalk.green(port)}`)
    debug(`Listening on ${chalk.green(port)}`)
})