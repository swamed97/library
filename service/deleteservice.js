const db = require('./db')

const singleevent = (event_name,event_date)=>{
    return db.Event.findOne({event_name,event_date}).then((events)=>{
        if(events){
            return {
              eventname:events.event_name,
              eventdate:events.event_date,
            userid:events.userId,

              priority:events.priority

            }
        }else{
            return{
                status:false,
                statuscode:400,
                message:"error"
            }
        }
    });

}

const deleteEvent = (event_name,event_date)=>{
    return db.Event.deleteOne({event_name,event_date}).then((event)=>{
        if(event){
           console.log("b",event)
            return{
                
                statuscode:222,
                status:true,
                message:"event deleted"
            }
           
        }
    })
}

const deletedevent = (event_name,event_date,userId,priority)=>{
    return db.Deletedevent.findOne({event_name,event_date}).then((deletedevent)=>{
        if(!deletedevent){
            const deleteEvent = new db.Deletedevent({
                event_name,
                event_date,
                userId,
                priority
                
            });
            deleteEvent.save();
            return{
                statuscode:222,
                status:true,
                message:"event events saved"
               
            }
        }
    })
}

const deletedevents = (userId)=>{
    return db.Deletedevent.find({userId}).then((events)=>{
        if(events){

           return {
            events:events
           }
              
            
            
           
        }

    })
}


module.exports = {singleevent,deleteEvent,deletedevent,deletedevents}