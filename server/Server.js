const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const routes = require("./Routes/routes");

mongoose.connect(
  "mongodb+srv://Talha:talha@cluster0.gh5ja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
,
  () => console.log("Database Conected"));

app.use(express.json());
app.use(cors());
app.use("/app", routes);

app.listen(1234, () => console.log("Server us running at port 1234"));
