const {Datatypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
    User : sequelize.define('user', {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: Datatypes.STRING,
        hashedPass: Datatypes.STRING
    })
}