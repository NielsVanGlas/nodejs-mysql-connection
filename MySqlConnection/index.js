const express = require('express');
const app = express();

const bodyParser = require('body-parser'); // parse application/json
app.use(bodyParser.json());

const conn = require('./services/db');

const shopRoutes = require('./routes/products'); // router
app.use("/api/shop", shopRoutes);

const port = 3000;

// show mysql connections
conn.connect((err)=>{
    if(err){
        throw err;
    };
    console.log(`MySQL connected`);
});

// server listener
app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`);
});