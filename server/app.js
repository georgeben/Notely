const express = require('express');
const morgan = require('morgan');
const bps = require('body-parser');
const logger = require('./config/winston.config');

const PORT = process.env.PORT || 3000;

const apiRoute = require('./routes/index')


const app = express();

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