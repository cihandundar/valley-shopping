const express = require("express");
const router = express.Router();

const productRouter = require("./products.js");
const authRoute = require("./auth");
const categoryRouter = require("./categories.js");
const userRoute = require("./users.js");
const paymentRoute = require("./payment.js");

router.use("/categories", categoryRouter);
router.use("/auth", authRoute);
router.use("/products", productRouter);
router.use("/users", userRoute);
router.use("/payment", paymentRoute);

module.exports = router;
