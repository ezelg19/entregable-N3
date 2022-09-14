const express = require('express')
const archivo = require('./index.js')

const app = express()
const PORT = 8080

const productos =  new archivo.Contenedor('./productos.txt')

app.get('/productos', (req, res)=>{
    res.send(productos.getAll())
})
app.get('/productoRandom',(req, res)=>{
    res.send(productos.getById(Math.floor(Math.random()*((productos.getAll().length+1)-1)+1)))
})

const server = app.listen(PORT,()=>{
    console.log(`activo en el puerto ${server.address().port}`)
}).on("error",(err)=>console.error(err))