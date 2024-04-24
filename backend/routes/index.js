const mainRoutes = require('./main')
const readData= require('./readdata')
const writeData= require('./writedata')
module.exports = function (app){
    mainRoutes(app)
    readData(app)
    writeData(app)

}