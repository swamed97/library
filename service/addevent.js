const db = require("./db");

const addevent = (userId,event_name, event_date, priority) =>{
    return db.User.findOne({userId}).then((user)=>{
        console.log("uss",user)
        if(user){
            const newEvent = new db.Event({
                userId,
                event_name,
                event_date,
                priority
            });
            newEvent.save();
            return{
                statusCode:202,
                status:true,
                message:"event added",
                event_name
            };

        }

    });
};



const eventTable = (userId) =>{
    return db.Event.find({userId}).then((eventss)=>{
        if(eventss){
            console.log("kk",eventss)
            return  eventss;
        }
    });
};



module.exports = {addevent,eventTable};
    
