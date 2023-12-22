const express = require("express")
const carsRoutes = require("./routes/cars.routes")
const brandsRoutes = require("./routes/brands.routes")
const app = express()
const PORT = 5000
app.use(express.json())
app.use("/cars", carsRoutes)
app.use("/brands", brandsRoutes)
app.listen(PORT, () => {
    console.log("backend running on 5000 ")
})