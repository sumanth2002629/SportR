const logger = require('./logger')
const fs = require('fs');
const winston = require('winston');

// Set up Winston logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logfile.log' }),
  ],
});

const requestLogger = (request, response, next) => {

  // fs.appendFileSync('./log.txt', '\nMethod: '+request.method,"utf-8");
  // fs.appendFileSync('./log.txt', '\nPath:  '+ request.path, "utf-8");
  // fs.appendFileSync('./log.txt', '\nBody:  '+ request.body, "utf-8");
  // fs.appendFileSync('./log.txt', "\n---", "utf-8");
  logger.info('Method: '+request.method)
  logger.info('Path: '+request.path)
  logger.info('Body: '+request.body)
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}