const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster-cabya.mongodb.net/week08?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});



server.use(cors());
server.use(express.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://tindev-frontendpage.herokuapp.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
server.use(routes);



server.listen(process.env.PORT || 3333);