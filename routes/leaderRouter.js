const express = require('express');
const bodyParser = require('body-parser');
const Leaders =require('../models/leaders');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.get((req, res, next)=>{
    Leaders.find({}).then((leaders)=>{
        res.statusCode=200;
       res.setHeader('Content-Type','application/json');
       res.json(leaders);
       console.log(res.json(leaders));
    },(err)=>next(err))
   .catch((err)=>next(err))
   })
.post((req, res, next)=>{
   Leaders.create(req.body).then((leader)=>{
       res.statusCode=200;
       console.log("dish created",leader);
      res.setHeader('Content-Type','application/json');
      res.json(leader);
      console.log(res.json(leader));
   },(err)=>next(err))
  .catch((err)=>next(err))
})
.put((req, res, next)=>{
   res.statusCode = 403;
   res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next)=>{
   Leaders.remove({}).then((leaders)=>{
       res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(leaders);
      console.log(res.json(leaders));
   },(err)=>next(err))
  .catch((err)=>next(err))
});

leaderRouter.route('/:leaderid')
.get((req, res, next)=>{
Leaders.findById(req.params.leaderid).then((leaders)=>{
    res.statusCode=200;
   res.setHeader('Content-Type','application/json');
   res.json(leaders);
   console.log(res.json(leaders));
},(err)=>next(err))
.catch((err)=>next(err))
})
.post((req, res, next)=>{
       res.statusCode=403;
       console.log("post operation not supported")
})
.put((req, res, next)=>{
       Leaders.findByIdAndUpdate(req.params.leaderid,{
          $set:req.body
       },{new:true})      
       .then((leader)=>{
           res.statusCode=200;
          res.setHeader('Content-Type','application/json');
          res.json(dish);
          console.log(res.json(leader));
       },(err)=>next(err))
      .catch((err)=>next(err))
   })
.delete((req, res, next)=>{
   Leaders.findByIdAndRemove(req.params.leaderid).then((resp)=>{
       res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(resp);
      console.log(res.json(resp));
   },(err)=>next(err))
  .catch((err)=>next(err))
})
module.exports = leaderRouter