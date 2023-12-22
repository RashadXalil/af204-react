
const express = require("express")
const { v4: uuidv4 } = require('uuid');
const Brand = require("../models/brand.model")
const brands = [{
    id: uuidv4(),
    name: "kia",
}, {
    id: uuidv4(),
    name: "bmw"
}]
const router = express.Router()
// local/cars/cars
router.get("/", (req, res) => {
    res.send(brands)
})
// getById
router.get("/:id", (req, res) => {
    const { id } = req.params
    const target = brands.find((item) => item.id == id)
    if (target) {
        res.status(200).send(target)
    }
    else {
        res.status(404).send("item not found")
    }
})
// delete
router.delete("/:id", (req, res) => {
    const { id } = req.params
    const target = brands.find((item) => item.id == id)
    if (target) {
        const indexOfTarget = brands.indexOf(target)
        brands.splice(indexOfTarget, 1)
        res.send(`item deleted id: ${target.id}`)
    }
    else {
        res.status(404).send("item not found")
    }
})
// post
router.post("/", (req, res) => {
    const newBrand = new Brand(uuidv4(), req.body.name)
    brands.push(newBrand)
    res.send("item created").status(201)
})
// edit
router.put("/:id", (req, res) => {
    const { id } = req.params
    let target = brands.find((item) => item.id == id)
    // {id:1,brand:"volvo",model:"xc90"}
    // {model:"xc60"} => {id:1,brand:"volvo",model:"xc60"}
    if (target) {
        const indexOfTarget = brands.indexOf(target)
        target = { ...target, ...req.body }
        brands[indexOfTarget] = { ...target }
        res.send(brands)
    }
    else {
        res.status(404).send("item not found")
    }
})
module.exports = router