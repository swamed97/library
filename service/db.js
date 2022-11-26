const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/EVENTCREATOR",{
    useNewUrlParser:true,
});

const User = mongoose.model("User", {
    userId:Number,
    email:String,
    pswd:String,
    
});

const Event = mongoose.model("Event",{
    userId:Number,
    event_name:String,
    event_date:String,
    priority:String
});

const Deletedevent = mongoose.model("Deletedevent",{
    event_name:String,
    event_date:String,
    userId:Number,
    priority:String
    
});

module.exports = {User,Event,Deletedevent};