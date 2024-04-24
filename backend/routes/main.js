const fs = require('fs')


module.exports=function (app){
    
   
    app.get('/', (req,res)=>{
      
        res.json(req.query)


    })
}