const {Schema, model} = require("mongoose");

const bookSchema = new Schema({
    name:{
        type: String,
        required: true,
        minlength: 2
    },
    author :{
        type : String,
        required : true,
        minlength: 3,
        maxlength : 50
    },
    edition:{
        type: Number,
        default:1
    },
    subject:{
        type:String,
        default:"",
        required:true
    },
    copies:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        default:""
    }
},
{timestamps:true});

module.exports = model("book_mod",bookSchema);