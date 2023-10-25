import app from "./app";
import mongoose from "mongoose";

mongoose.set("strictQuery",false);

mongoose.connect(process.env.MONGODB_URL)
        .then(()=>{
            console.log("Connected Successfully!");
        })
        .catch((err)=>{
            console.log(err)
        })

const PORT = process.env.PORT || 1800

app.listen(PORT, ()=>{
    console.log(`Server is running on :: http://localhost:${PORT}`)
})