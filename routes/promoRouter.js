const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all((req, res, next) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();

})
.get((req, res, next) => {

    res.end('Will Send Details of the Promotions to you');

})
.post((req, res, next) => {

    res.end('Will add the Promotion: ' + req.body.name + ' with details: ' + req.body.description);

})
.put((req, res, next) => {

    res.statusCode = 403;
    res.end('Upadte Operaion not Supported on /Promotions/');

})
.delete( (req, res, next) => {

    res.end('Deleting Promotions');

});

promotionRouter.route('/:promotionId')

.all((req, res, next) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();

})
.get((req, res, next) => {

    res.end('we will Send Details of the Promotion : ' + req.body.name);
    
})
.post((req, res, next) => {

    res.statusCode = 403;

    res.end('Post Operaion not Supported on Promotion');

})
.put((req, res, next) => {

    res.end('We Will update promotion with id: ' + req.params.promotionId);

})
.delete( (req, res, next) => {

    res.end('Deleting dish with id: ' + req.params.promotionId);

});

module.exports = promotionRouter;