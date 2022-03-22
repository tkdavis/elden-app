// server
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const tasksRouter = require('./routes/tasks');

app.use('/tasks', tasksRouter);
// app.get('/api', (req, res) => {
//   res.json({tasks: ['It was a dark and stormy night.',
//   'Fight Margit',
//   'Find more spells',
//   'Visit Stoneveil Castle',
//   'Return to the church',
//   'Talk to the chrysalis people and return to red riding hood',
//   'It was a dark and stormy night.',
//   'Fight Margit',
//   'Find more spells',
//   'Visit Stoneveil Castle',
//   'Return to the church']});
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});