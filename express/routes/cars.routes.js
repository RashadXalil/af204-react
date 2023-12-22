
const express = require("express")
const { v4: uuidv4 } = require('uuid');
const Car = require("../models/car.model")
const cars = [{
    id: uuidv4(),
    brand: "kia",
    model: "optima"
}, {
    id: uuidv4(),
    brand: "volkswagen",
    model: "lesh"
}]
const router = express.Router()
// getAll
router.get("/", (req, res) => {
    res.send(cars)
})
// getById
router.get("/:id", (req, res) => {
    const { id } = req.params
    const target = cars.find((item) => item.id == id)
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
    const target = cars.find((item) => item.id == id)
    if (target) {
        const indexOfTarget = cars.indexOf(target)
        cars.splice(indexOfTarget, 1)
        res.send(`item deleted id: ${target.id}`)
    }
    else {
        res.status(404).send("item not found")
    }
})
// post
router.post("/", (req, res) => {
    const newCar = new Car(uuidv4(), req.body.brand, req.body.model)
    console.log(newCar)
    cars.push(newCar)
    res.send("item created").status(201)
})
// edit
router.put("/:id", (req, res) => {
    const { id } = req.params
    let target = cars.find((item) => item.id == id)
    // {id:1,brand:"volvo",model:"xc90"}
    // {model:"xc60"} => {id:1,brand:"volvo",model:"xc60"}
    if (target) {
        const indexOfTarget = cars.indexOf(target)
        target = { ...target, ...req.body }
        cars[indexOfTarget] = { ...target }
        res.send(cars)
    }
    else {
        res.status(404).send("item not found")
    }
})
module.exports = router