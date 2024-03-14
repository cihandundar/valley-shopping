const express = require("express");
const router = express.Router();

const productRouter = require("./products.js");
const authRoute = require("./auth");
const categoryRouter = require("./categories.js");

router.use("/categories", categoryRouter);
router.use("/auth", authRoute);
router.use("/products", productRouter);

module.exports = router;
