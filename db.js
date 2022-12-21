const Sequelize = require('sequelize')
const db = new Sequelize('TaskGenie', 'root', '',{
    host:"localhost",
    dialect:"mysql"
});

module.exports = db;