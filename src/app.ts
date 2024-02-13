import express from "express";

// importing routes
import userRoute from "./routes/user.js";

const port = 4000;
connectDB();

const app= express();

app.use(express.json());



app.get("/", (req, res)=>{
    req.send("API Working with/ api/v1")
});
// using Routes

app.use("./api/v1/user", userRoute );



app.listen(port, () =>{
    console.log(`Server is running on:${port}`);
});

