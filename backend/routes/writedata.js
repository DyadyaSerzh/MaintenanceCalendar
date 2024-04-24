const fs = require('fs')


module.exports=function (app){
    
   
    app.get('/writedata/', (req,res)=>{
        fs.writeFile('base/data.txt', req.query.path, (err) => {
            if(err) throw err;
        console.log('Data has been replaced!');
        });
        console.log(req.query.path)
      
        
    })
}