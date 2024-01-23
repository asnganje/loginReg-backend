require("dotenv").config();
const express = require("express");
const connectDB = require("./server/db/connect");
const authRoute = require("./server/routes/authRoutes");
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/api/v1/auth', authRoute)

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URI

const start = async () => {
  try {
    await connectDB(url)
    console.log("MongoDB connected successfully!");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(`The server could not be loaded ${error}`);
  }
};

start();
