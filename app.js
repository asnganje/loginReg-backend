require("dotenv").config();
const express = require("express");
const connectDB = require("./server/db/connect");
const authRoute = require("./server/routes/authRoutes");
const app = express();



app.use('/api/v1/auth', authRoute)

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URI

const start = async () => {
  try {
    await connectDB(url)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log("Server could not be loaded");
  }
};

start();
