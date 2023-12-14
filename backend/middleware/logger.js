const fs = require('fs');

const info = (...params) => {
    fs.appendFileSync('./log.txt', '\n',"utf-8");
    fs.appendFileSync('./log.txt', ...params,"utf-8");
    fs.appendFileSync('./log.txt', "\n---", "utf-8");

    console.log(...params)
    console.log("---")
  }
  
  const error = (...params) => {
    fs.appendFileSync('./log.txt', '\n',"utf-8");
    fs.appendFileSync('./log.txt', ...params,"utf-8");
    fs.appendFileSync('./log.txt', "\n---", "utf-8");
    console.error(...params)
    console.log("---")
  }
  
  module.exports = {
    info, error
  }