const express = require('express');
const bodyParser = require('body-parser');
const Promotions =require('../models/promotions');
const promoteRouter = express.Router();

promoteRouter.use(bodyParser.json());
promoteRouter.route('/')
.get((req, res, next)=>{
    Promotions.find({}).then((promotions)=>{
        res.statusCode=200;
       res.setHeader('Content-Type','application/json');
       res.json(promotions);
       console.log(res.json(promotions));
    },(err)=>next(err))
   .catch((err)=>next(err))
   })
.post((req, res, next)=>{
   Promotions.create(req.body).then((promotion)=>{
       res.statusCode=200;
       console.log("promotions created",promotion);
      res.setHeader('Content-Type','application/json');
      res.json(dish);
      console.log(res.json(dish));
   },(err)=>next(err))
  .catch((err)=>next(err))
})
.put((req, res, next)=>{
   res.statusCode = 403;
   res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next)=>{
   Dishes.remove({}).then((promotions)=>{
       res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(promotions);
      console.log(res.json(promotions));
   },(err)=>next(err))
  .catch((err)=>next(err))
});
   
promoteRouter.route('/:promoid')
.get((req, res, next)=>{
Dishes.findById(req.params.promoid).then((promotions)=>{
    res.statusCode=200;
   res.setHeader('Content-Type','application/json');
   res.json(promotions);
   console.log(res.json(promotions));
},(err)=>next(err))
.catch((err)=>next(err))
})
.post((req, res, next)=>{
       res.statusCode=403;
       console.log("post operation not supported")
})
   .put((req, res, next)=>{
       Dishes.findByIdAndUpdate(req.params.promoid,{
          $set:req.body
       },{new:true})      
       .then((promotion)=>{
           res.statusCode=200;
          res.setHeader('Content-Type','application/json');
          res.json(promotion);
          console.log(res.json(promotion));
       },(err)=>next(err))
      .catch((err)=>next(err))
   })
 .delete((req, res, next)=>{
   Dishes.findByIdAndRemove(req.params.promoid).then((resp)=>{
       res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(resp);
      console.log(res.json(resp));
   },(err)=>next(err))
  .catch((err)=>next(err))
})
module.exports = promoteRouter