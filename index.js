const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err){
        console.log("Something go wrong",err);
    }else{
        console.log(config.secret);
        console.log("Nice!!!! You connected to database: " + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist'));



app.get('*', (req, res) =>{
    res.sendfile(path.join(__dirname + '/client/dist/index.html'));
  });
  
app.listen(8081, () => {
    console.log('Listening on port 8081')
});