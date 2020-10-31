const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require('morgan');
require('dotenv').config();

const LOCAL_MONGO = 'mongodb://localhost/flavor-saver';

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define API routes here
const userRouter = require('./database/routes/users');
const postRouter = require('./database/routes/posts');
app.use('/users', userRouter);
app.use('/posts', postRouter);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || LOCAL_MONGO, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("MongoDB database connection established successfully!");
})

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// HTTP request logger
app.use(morgan('tiny'));
// app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
