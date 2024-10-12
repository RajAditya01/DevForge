import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express();

app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"I am coming from backend",
        success:true
    })
})

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));
const corsOptions={
    origin:'http://localhost:5135',
    Credential:true
}
app.use(cors(corsOptions));


const PORT= 8000;

app.listen(PORT,()=>{
    console.log(`Server is listen at port ${PORT}`);
});