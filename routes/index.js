var express = require('express');
var router = express.Router();

router.get("/", (req, res) =>{
  res.render('index')
})

router.get("/linknaocungdc", (req, res)=>{
  res.render('tenjcungdc')
})

router.get('/quote', (req, res) => {
  var text = "<h1 style ='color: red;'>Cac kieu cac kieu </h1>"
  res.send(text)
})

router.get('/api',(req,res) =>{
  var data = 
  {
    name: 'Dinh Phong',
    age: 23,
    address: 'Ha Giang',
    gender: 'male'
  }
  res.json(data)
})

module.exports = router;
