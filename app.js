const express=require('express')

const cors=require('cors')

const sequelize=require('./model/expense')

const expenseRpoute=require('./routes/expense')

const app=express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/expense',expenseRpoute)

sequelize.sync().then(()=>{
    app.listen(3000,()=>{console.log('listening on 3000')})

})