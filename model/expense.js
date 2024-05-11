const Sequelize=require('sequelize')

const sequelize=require('../utility/database');

const User=sequelize.define('expence',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false    
    }

});

module.exports=User;