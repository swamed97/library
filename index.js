const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors({origin:" http://localhost:4200",}))

const dataservice = require('./service/registerservice')
const eventservice = require('./service/addevent')
const deleteservice = require('./service/deleteservice')





app.use(express.json())


app.get('/', (req, res) => {
    res.send("get function check")
})


app.post('/register',(req,res) =>
dataservice.register(req.body.userid,req.body.email,req.body.pswd)
 .then((result)=>{
  res.status(result.statusCode).json(result);
 })

 

);
 
app.post('/login',(req,res)=>
dataservice.login(req.body.email,req.body.pswd)
.then((result)=>{
  res.status(result.statusCode).json(result);
})

)

app.post('/addevent',(req,res)=>{
  eventservice.addevent(req.body.userid,req.body.event_name,req.body.event_date,req.body.priority)
  .then((result)=>{
    res.status(result.statusCode).json(result);
    console.log("qq",result)
  })
})

app.get('/addevent/:userid',(req,res)=>{
  eventservice.eventTable(req.params.userid).then((result)=>{
    res.json(result);
  })
})

app.get('/singleevent/:event_name/:event_date',(req,res)=>{
  deleteservice.singleevent(req.params.event_name,req.params.event_date).then((result)=>{
    res.json(result);
  });
});

app.delete('/deleteEvent/:event_name/:event_date',(req,res)=>{
  deleteservice.deleteEvent(req.params.event_name,req.params.event_date).then((result)=>{
    res.json(result);
  })
})

app.post('/deletedevent',(req,res)=>{
  deleteservice.deletedevent(req.body.event_name,req.body.event_date,req.body.userId,req.body.priority).then((result)=>{
    res.json(result)
  })
})

app.get('/deletedevents/:userId',(req,res)=>{
  deleteservice.deletedevents(req.params.userId).then((result)=>{
    res.json(result)
  })
})




app.listen(3004, () => {
    console.log("port 3004 running");
})


