const express = require("express");
const router = express.Router();

const productRouter = require("./products.js");
const categoryRouter = require("./categories.js");

router.use("/categories", categoryRouter);
router.use("/products", productRouter);

module.exports = router;
