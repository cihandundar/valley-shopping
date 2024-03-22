const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const mainRoute = require("./routes/index");
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDb");
  } catch (error) {
    throw error;
  }
};
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", mainRoute);

app.listen(5000, () => {
  connect();
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
