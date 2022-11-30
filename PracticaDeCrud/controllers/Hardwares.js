const Hardware = require("../models/Hardware")
const readHardware = async (_, res) => {
    try {
        const Hardwares = await Hardware.find({})
        if (Hardwares.length === 0) {
            return res.render("index", { ok: false })
        }
        return res.render("index", { ok: true, Hardwares: Hardwares })
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, msg: "erroe del servidor" })
    }
}
const createHardware = async (req, res) => {
    console.log(req.body)
    try {
        const hardwareNuevo = new Hardware(req.body)
        await hardwareNuevo.save()
        return res.redirect("/")
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, msg: "erroe del servidor" })

    }
}

const deleteHardware =async(req,res)=>{
    const id = req.params.id;
    try {

        await Hardware.findByIdAndDelete(id);
        return res.redirect("/")
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, msg: "error del servidor" })

    }
}
const updateHardware= async(req,res)=>{
    const id = req.body.edit_id
    try {
        await Hardware.findByIdAndUpdate(id, req.body);
        return res.redirect("/")
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, msg: "erroe del servidor" })
    }
}
module.exports={
    readHardware,
    createHardware,
    deleteHardware,
    updateHardware
}   