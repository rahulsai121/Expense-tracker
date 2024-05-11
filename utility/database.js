const Sequelize=require('sequelize')

const sequelize=new Sequelize('node-complete','root','Rahul55555',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize;