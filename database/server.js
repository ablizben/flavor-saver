const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const LOCAL_MONGO = 'mongodb://localhost/flavor-saver';

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define API routes here
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
app.use('/users', userRouter);
app.use('/posts', postRouter);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || LOCAL_MONGO, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("MongoDB database connection established successfully!");
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
