const express = require('express');
const bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Ads } = require('./models/ads');

const router = require('./router');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

router(app);

app.post('/saveAdd', (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
