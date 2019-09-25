const mongoose =require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var leadersSchema =new Schema({
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
        default:""
    },
    designation:{
        type:String,
        required:true,
        min:0
    },
    abbr:{
        type:String,
        required:true
    },
    description:{
      type:String,
      required:true
    },

    featured:{
       type:Boolean,
        default:false
    }

});
var leaders = mongoose.model('leader', leadersSchema);
module.exports= leaders;