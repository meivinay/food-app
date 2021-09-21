const mongoose = require("mongoose");
let validator = require("email-validator");
const db_link = require("../secrets.js") 
 

mongoose.connect(db_link.key).then(function(){
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
        unique:true,
        validate: function(){
            return validator.validate(this.email);
        }
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