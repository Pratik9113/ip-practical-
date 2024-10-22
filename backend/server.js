import express from "express";
import cors from "cors";
const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());

app.post("/post", ()=>{
    const {salary,gos, bonus} =  req.body;
    var tax;
    if(salary >= 400000){
        tax = 0.3
    }else if (salary < 400000){
        tax = 0.1
    }

    const totalSalary  = salary + gos + bonus;

    const setSalary = tax*(salary + gos + bonus);
    const newSetSalary =  totalSalary - setSalary;
    console.log(newSetSalary);
    return res.status(200).json(({success:true, data : newSetSalary}));
})


app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})