let express = require("express");

let app = express();

let port = '3000';

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})
console.log("running");
app.use(express.static("public"))

let userRouter = express.Router();
let authRouter = express.Router();

app.use("/user",userRouter);
app.use("/auth",authRouter);

userRouter.route("/:id")
.get(getUser);

authRouter.route("/")
.get(getAuth);

function getUser(req,res){
    console.log(req.params);
    res.send("user route");
}

function getAuth(req,res){
    res.send("auth");
}

// ********************************************************************************
// app.get("/",(req,res)=>{
//     // res.send("hello  ");
//     res.redirect("/pass2");
//     console.log("get req");
// })

// app.post("/resetPassword",(req,res)=>{
//     let obj = req.body;
//     console.log("got a pass reset req");
// })

// app.get("/pass",(req,res)=>{
//     // console.log("redirect to pass");
//     // res.sendFile("./public/pass.html",{root:__dirname});
//     // res.send("as");
    
//     console.log("after res");
// })
// app.get("/pass2",(req,res)=>{
//     res.send("redirected")
// })

// app.use((req,res)=>{
//     console.log("use running");
//     res.send("not found");
// })

// app.get("/home",(req,res)=>{
    //     res.send("this is home")
    // })
    
    // app.get("/",(req,res)=>{
        //     console.log("forgot password");
        //     console.log("get request")
//     res.sendFile("./public/index.html",{root:__dirname})
// })

// app.post("/f",(req,res)=>{
//    console.log("got a post req");
//    res.send("s")
//     // let {email} = req.body
//     // console.log(req);
//     // res.send("reset password")  
// })


// #######################################################
// let express = require("express");

// let app = express();
// app.listen("3001",()=>{
// console.log("app is listening on port 3001");
// })
// app.use(express.json());
// let user = {};

// app.get("/m",(req,res)=>{
// res.send("hello");
// })

// app.get("/user",(req,res)=>{
//     res.json(user);
// })

// app.post("/user",(req,res)=>{
//     user = req.body
//     console.log(user);
//     res.send(`Data received is ${user}`);

// })

// app.patch("/user",(req,res)=>{
//     let obj = req.body;
// user = {...user,...obj};
// res.send(user)
// })