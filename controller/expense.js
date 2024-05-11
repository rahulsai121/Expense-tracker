const User=require('../model/expense')
exports.postExpense=(req,res)=>{
    
    User.create({
        amount:req.body.amount,
        description:req.body.description,
        category:req.body.category
    })
    .then(resl=>{
        res.json({expence:resl})
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getExpenses= async (req,res)=>{
    const expences=await User.findAll()
    //console.log(expences)
    res.json({allExpences:expences})
}

exports.deleteExpence=async(req,res)=>{
    //console.log(req)
    const paramId=req.params.id
    //console.log(paramId)
    await User.destroy({where:{id:paramId}})
}