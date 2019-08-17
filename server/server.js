const express = require('express');
const app = express();
const parser = require('body-parser');

const cors = require('cors');
app.use(cors());
app.use(parser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('sliderData');
    const emissionsCollection = db.collection('emissions');
    const emissionsRouter = createRouter(emissionsCollection);
    app.use('/api/emissions', emissionsRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
