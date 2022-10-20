const {Datatypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
    Post : sequelize.define('user', {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: Datatypes.STRING,
        content: Datatypes.TEXT,
        privateStatus: Datatypes.BOOLEAN
    })
}