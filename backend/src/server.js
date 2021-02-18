const express = require('express');
const routes = require('./routes');

const passport = require('passport');
const session = require('express-session');
const redis = require('./services/redisStore');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');

const cors = require('cors');

require('dotenv').config();


try {
    mongoose.connect(`mongodb://${process.env.MONGODB_HOSTNAME}:27017/rgbwallet`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");    
} catch (error) {
    console.log("MongoDB Error");
    console.log(error);
}

app = express();

app.use(cookieParser(`${process.env.REDIS_SECRET}`));

app.use(session({
    resave: true,
    name: "RGBWalletSession",
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false, sameSite: 'strict', maxAge: 3600000 },
    secret: `${process.env.REDIS_SECRET}`,
    store: redis.sessionStore,
}));

app.use(cors({
    credentials: true,
    origin: [`${process.env.REACT_HOSTNAME}:3000`, 'http://localhost:3000'],
    exposedHeaders: ["set-cookie"]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(routes);

app.listen(3333);