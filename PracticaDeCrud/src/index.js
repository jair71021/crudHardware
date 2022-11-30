const express = require('express')
require('dotenv').config()
const dbconexion=require("../database/config")
const server= express()


dbconexion();

server.set("view engine", "pug")
server.use(express.urlencoded({ extended: true }))
server.use("/static", express.static('./public'))
server.use(express.json())
server.use(require('../routes/hardware'))
server.listen(process.env.PORT, () => {
    console.log(`server escuchado en http://localhost:${process.env.PORT}`);
});

