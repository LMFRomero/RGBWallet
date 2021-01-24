const express = require('express');
const routes = require('./routes');

const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://localhost:27017/myapp', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");    
} catch (error) {
    console.log("MongoDB Error");
    console.log(error);
}

app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);