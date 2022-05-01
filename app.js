//    Express Server
//    app.js

const { config } = require("dotenv");
const express = require("express");
const { join } = require("path");

const app = express();

// Load environment variables
config();

// Setting up the public directory
app.use(express.static(join(__dirname, "/public")));

// Add routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/calculator.html");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
});






