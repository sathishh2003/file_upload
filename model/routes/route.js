const { log } = require('console');
const express = require('express');
const router = express.Router();
const path = require('path');
const upload = require('../../app');


router.get('/home',(req,res)=>{
    res.render('index');
});

router.get('/about',(req,res)=>{
    res.render('about');
});

router.get('/contact',(req,res)=>{
    res.render('contact');
})

router.get('/resume',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','..','public','sathish resume.pdf'));
});
router.get('/*',(req,res)=>{
    res.status(404).render('404');
});




module.exports = router;