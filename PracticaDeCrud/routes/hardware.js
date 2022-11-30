const Router= require("express");
const { readHardware, createHardware, deleteHardware, updateHardware } = require("../controllers/Hardwares");

const route = Router();
route.get("/", readHardware)
route.post("/create", createHardware)
route.post("/update",updateHardware)
route.get("/delete/:id",deleteHardware)


module.exports = route;