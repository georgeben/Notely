const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.simple(),
        winston.format.timestamp(),
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.simple(),
                winston.format.timestamp(),
            )
        })
    ]
})

module.exports = logger;