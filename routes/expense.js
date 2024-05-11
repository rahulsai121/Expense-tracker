const express=require('express')

const expenseController=require('../controller/expense')

const router=express.Router();

router.post('/add-expense',expenseController.postExpense)

router.get('/expenses',expenseController.getExpenses)

router.delete('/delete-expense/:id',expenseController.deleteExpence)


module.exports=router