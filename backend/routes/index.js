const express = require("express");
const router = express.Router();

const productRouter = require("./products.js");
const authRoute = require("./auth");
const categoryRouter = require("./categories.js");
const userRoute = require("./users.js");

router.use("/categories", categoryRouter);
router.use("/auth", authRoute);
router.use("/products", productRouter);
router.use("/users", userRoute);

module.exports = router;
