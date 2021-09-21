const mongoose = require("mongoose");

const db_link = "mongodb+srv://meivinay:s4JLcPLQsUFZCcV5@cluster0.b5krb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(db_link).then(function(){
    console.log("db connected");
})
.catch(err=>{
    console.log(err);
})



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    confirmPassword:{
        type:String,
        required:true,
        unique:true
    }
})

const userModel = mongoose.model("userModel", userSchema);

(async function createUser(){
    let user = {
        name:"abhi",
        email:"tanwarv96@gmail.com",
        password:"12345678",
        confirmPassword:"12345678"
    }

    let userObj = await userModel.create(user);

    console.log(userObj);
})()