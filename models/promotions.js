const mongoose =require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var promoSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
         type:String,
          required:true
    },
    label:{
        type:String,
        required:true
    },
    price:{
        type:Currency,
        required:true
    },
    description:{
      type:String,
      required:true
    },

    featured:{
       type:Boolean,
       required:true
    }

});
var promotions = mongoose.model('promotion', promoSchema);
module.exports= promotions;