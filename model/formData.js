const { DataTypes } = require('sequelize')
const sequelize = require('../util/dataBase')

const bookingData = sequelize.define('bookingData',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    mobileNumber:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true
    }
})

module.exports = bookingData