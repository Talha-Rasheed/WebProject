const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const RoutesUrl = require("./routes/routes");
const cors = require("cors");

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database Connected")
);

app.use(express.json());
app.use(cors());
app.use("/app", RoutesUrl);
app.listen(9000, () => console.log("Server Is Runing !!!"));
