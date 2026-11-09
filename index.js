const express = require("express");
const connectDataabase = require("./config/db");

const app = express();  
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/api"));

