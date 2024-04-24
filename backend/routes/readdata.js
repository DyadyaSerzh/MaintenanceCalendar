const fs = require('fs')


module.exports=function (app){
    
   
    app.get('/data', (req,res)=>{
        fs.readFile('base/data.txt', 'utf-8', (err, data) => {
            if(err) throw err;
            res.json(data)
        });
    
      
        
    })
}