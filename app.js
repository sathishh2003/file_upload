const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const router = require('./model/routes/route');
const port = 1000;


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'model')));

const storage=multer.diskStorage({
  destination:  function(req,file,cb){
        cb(null,'upload');
  },
  filename:function(req,file,cb){
    cb(null,file.originalname.replace(/\.[^/.]+$/,"")+'_'+Date.now()+path.extname(file.originalname)); 
}
});
const maxSize = 2*1000*1000;
const upload = multer({
    storage:storage,
    limits:maxSize,
    fileFilter:function(req,file,cb){
        let fileTypes = /png|jpg|jpeg/;
        let mineType = fileTypes.test(file.mimetype);
        let extname = path.extname(file.originalname);

        if(mineType && extname){
            cb(null,true);
        
    }
        else{
            cb('sorry the file should be in the following formats:'+fileTypes);
        }
    }
}).single('img');


app.post('/upload',(req,res)=>{
    upload(req,res,function(err){
        if(err){
            res.render('err');
        }
        else{
            res.render('thankyou')
        }
    })
});

app.use('/',router);



app.listen(port,()=>{
    console.log(port+': is running now!');
});




