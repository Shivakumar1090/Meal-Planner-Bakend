const express = require("express");
const mongoose = require("mongoose");
const dbURI = require("./config/key");

const app = express();

// Mongodb connection
const connectDB = async () => {
    await mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("MongoDB Connected"))
      .catch((err) => console.log(err));
};
connectDB();

app.use(express.json());

//LISTENING ON PORT 3000
app.listen(5000, () => {
    console.log("server is Listening on port 5000");
});