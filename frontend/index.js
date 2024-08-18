const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors({ credentials: true, origin: true }));

app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ message: "Pong" });
});

app.use(require("./cardRoutes"));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
