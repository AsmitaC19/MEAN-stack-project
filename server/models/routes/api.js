const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { Admin } = require('mongodb');
const db = "C:\Users\admin\Desktop\MarvellousDB";
const ObjectId = require('mongoose').Types.ObjectId;

const Event = require('../models/event.js');

/*
mongoose.connect(db, function(err)
{
    if(err)
    {
        console.error('Error! ' + err)
    } 
    else 
    {
      console.log('Connected to mongodb')      
    }
});
*/

router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Angular: Web Development",
      "description": "2 Days"  
    },
    {
      "_id": "2",
      "name": "Python: Machine Learning",
      "description": "2 Days"
    },
    {
      "_id": "3",
      "name": "Machine Learning",
      "description": "2 Days"
    },
    {
      "_id": "4",
      "name": "GoLang",
      "description": "2 Days"
    },
    {
      "_id": "5",
      "name": "IPhone Programming",
      "description": "2 Days"
    },
    {
      "_id": "6",
      "name": "Android Programming",
      "description": "2 Days"
    }
  ]
  res.json(events)
})

router.post('/login', (req, res) => {
    let userData = req.body
    
    if ((userData.email == "Marvellous") && (userData.password == "Marvellous")) 
    {
      let payload = {subject: 1}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})   
    } 
    else 
    {
        res.status(401).send('Invalid Password')
    } 
})

router.post('/adminLogin', (req, res) => {
  let adminData = req.body
  
  if ((adminData.email == "Asmita") && (adminData.password == "Asmita")) 
  {
    let payload = {subject: 1}
    let token = jwt.sign(payload, 'secretKey')
    res.status(200).send({token})   
  } 
  else 
  {
      res.status(401).send('Invalid Password')
  } 
})

router.get('/', (req, res)=> {
  Event.find( (err, doc) =>{
      if(err){
          console.log('Error in Get Data'+err)
      }else{
          res.send(doc);
      }
  })
});


router.get('/:id', (req, res)=> {
  if(ObjectId.isValid(req.params.id)){
      Event.findById(req.params.id, (err, doc) =>{
          if(err){
              console.log('Error in Get Event by id '+ err)
          }else{
              res.send(doc);
          }
      });
  }else{
      return res.status(400).send('No record found with id' + req.params.id)
  }
});

// Post Api
router.post('/', (req, res)=> {
  let eve = new Event({
      _id:  req.body._id,
      eventname : req.body.eventname,
      description: req.body.description
  });

  eve.save( (err, doc)=>{
      if(err){
          console.log('Error in Post Data'+err)
      }else{
          res.send(doc);
      }
  })
});


router.put('/:id', (req, res)=> {
  if(ObjectId.isValid(req.params.id)){

      let eve = {
          eventname : req.body.eventname,
          description: req.body.description
      };

      Event.findByIdAndUpdate(req.params.id, {$set :eve}, {new:true}, (err, doc) =>{
          if(err)
          {
              console.log('Error in Update Event by id '+ err)
          }else
          {
              res.send(doc);
          }
      });
  }else{
      return res.status(400).send('No record found with id' + req.params.id)
  }
});


// Delete Api
router.delete('/:id', (req, res)=> {
  if(ObjectId.isValid(req.params.id)){
      Event.findByIdAndRemove(req.params.id, (err, doc) =>{
          if(err){
              console.log('Error in Delete Event by id '+ err)
          }else{
              res.send(doc);
          }
      });
  }else{
      return res.status(400).send('No record found with id' + req.params.id)
  }
});



module.exports = router;
