import encrypt from "encryptjs";
import User from "../Model/User.js";

export const registerChecks = (req,res,next) => {
    try {
        const {name, email , password, confirmPassword} = req.body;
        if(!name) return res.send("Name is required.");
        if(!email) return res.send("Email is required.");
        if(!password) return res.send("Password is required");
        if(!confirmPassword) return res.send("Confirm Passrod is required");
        next();
    } catch (error) {
        return res.send(error);
    }
}

export const weatherCheckAuth = async (req,res,next) =>{
    try {
        const {id, password} = req.body;
        const response = await User.find({_id: id}).exec();
        let userPass = response[0].password;
        let secretkey='weather';
        let decryptPass = encrypt.decrypt(userPass,secretkey,256);
        console.log(decryptPass);
        if(decryptPass != password) return res.send("Password does not match");
        next();
        
    } catch (error) {
        return res.send(error);
    }
}