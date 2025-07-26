import dotenv from "dotenv"
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env" //it is a secrect
})
const PORT = process.env.PORT || 8000


connectDB()
.then(()=>{
    app.listen(PORT,()=>{
    console.log (` ⚙️ SERVER IS RUNNING ON PORT => ${PORT}`)
  })
})
.catch((err)=>{
  console.log("Mongodb connection error",err)
})
