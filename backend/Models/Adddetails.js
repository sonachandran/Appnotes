const mongoose=require('mongoose')
const Adddataschema=new mongoose.Schema({
    
    additem:{
        type:String,
        required:true
    }
 
})

let Adddetails=mongoose.model('Addnote',Adddataschema)

module.exports=Adddetails