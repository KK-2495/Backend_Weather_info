import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./Route/AllRoute.js";

const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', router);


mongoose.connect('mongodb+srv://Krish24:Krish%402495@cluster0.s8xz5ha.mongodb.net/Weather_Update?retryWrites=true&w=majority')
.then(()=>console.log("DB Connected"))
.catch((err)=> console.log("DB error --> ",err));

app.listen(4000, ()=>console.log("connected on port"));


// let a = [1,1,1,2,2,3,3,3,3,3,4,4,5,5,5,5,5,6];
// let dup = [];
// let uniq = [];
// for(let i=0; i<a.length; i++){
//     if(a[i] == a[i+1]){
//         // dup.push(a[i]);
//         a.splice(1,0,a[i]);
//     }
// }
// console.log(a);

