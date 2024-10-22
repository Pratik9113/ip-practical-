import express from "express";
import cors from "cors";
const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());

app.post("/post", ()=>{
    const {salary} =  req.body;
    var tax;
    if(salary >= 400000){
        tax = 0.3
    }else if (salary < 400000){
        tax = 0.1
    }

    const setSalary = tax*salary;
    const newSetSalary =  salary - setSalary;
    console.log(newSetSalary);
    return res.status(200).json(({success:true, data : newSetSalary}));
})


app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})