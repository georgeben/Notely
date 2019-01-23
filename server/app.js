const express = require('express');
const morgan = require('morgan');
const bps = require('body-parser');
const logger = require('./config/winston.config');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

//Routes
const apiRoute = require('./routes/index')

const app = express();
NODE_ENV === 'production'? app.use(morgan('combined')) : app.use(morgan('dev'));
app.use(cors());

app.use(bps.urlencoded({extended: false}));
app.use(bps.json());

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.use('/api', apiRoute)

app.listen(PORT, () => {
    logger.log({
        level: 'info',
        message: `Server started on port ${PORT}`
    })
})