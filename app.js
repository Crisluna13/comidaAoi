const express = require("express")
const morgan = require('morgan')
const app = express()
const port = 3500
const comidaRouter = require('./Routes/comidaRouter')

app.get("/", (req, res)=>{
    res.json({mensaje: "Aplicacion funcionando Correctamente"})
})

app.use(morgan('dev'))
app.use('/API', comidaRouter)

//Lista blanca esto redirecciona al siguiente mensaje cuando acceden a algo inexistente
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

app.listen(port, ()=>{
    console.log(`Aplicacion  corriendo en el puerto ${port}`)
})




