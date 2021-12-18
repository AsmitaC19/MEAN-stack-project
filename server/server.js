const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
mongoose = require('mongoose'); 

const api = require('./routes/api');
const port = 3000;

const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.use('/api', api);

app.listen(port, function(){
    console.log("Marvellous Innfosystems : Server running on localhost:" + port);
});

mongoose.connect("mongodb://localhost:27017/demo",function(err)
{     
    if(err)     
    {          
        console.log("Marvellous Infosystems : Fail to connect DB");     
    }     
    else     
    {         
        console.log("Marvellous Infosystems : Successfully connected to DB");     
    } 
}); 
