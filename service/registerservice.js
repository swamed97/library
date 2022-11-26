const db = require("./db");
// database={}

const register = (userId,email,pswd) => {
    return db.User.findOne({email}).then((user) =>{
        console.log("uu",user)
        if(user){
        return {
            statusCode:400,
            status:false,
            message:"user already exist"
        };
    }else{
       const newUser = new db.User({
            userId,
            email,
            pswd,
            
        });
        newUser.save()
        console.log("AA",newUser)
        return {
            statusCode:200,
            status:true,
            message:"user added"
        }
    }
})
}


const login = (email,pswd) =>{
    return db.User.findOne({email,pswd}).then((loguse) =>{
        if(loguse){
            return{
                statusCode:200,
                status:true,
                message:"login successfull",
                id:loguse.userId

            }
        }else{
            return{
                statusCode:400,
                status:false,
                message:"Login failed"

            }
        }
    })
}
   



module.exports = {register,login};
