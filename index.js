const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const router = require("./routes");
const connectDB = require("./db/db");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api',router);

connectDB();

app.use(express.static(path.join(__dirname, "/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, "/dist/index.html"));
})

const port = process.env.PORT;
app.listen(port , ()=>{
    console.log(`Server listening on PORT : ${port}`);
})