const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const mongoose = require('./db.js'); 

const api = require('./routes/api');

const port = 3000;

const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.use('/api', api);

app.listen(port, function(){
    console.log("Marvellous : Server running on localhost:" + port);
});

app.use('/events', api);









