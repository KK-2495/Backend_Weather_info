import encrypt from "encryptjs";
import User from "../Model/User.js";

export const register = async (req,res) =>{
    try {
        const {name, email, password, confirmPassword} = req.body;

        const response = await User.find({email}).exec();
        
        if(response.length) return res.send("You're already Registered.");
        let secretkey='weather';
        let encryptPass =encrypt.encrypt(password,secretkey,256);
        const user = new User({
            name,
            email,
            password:encryptPass,
            confirmPassword
        });
        await user.save();
        return res.send("Registration Successful.!");
    } catch (error) {
        return res.send(error);
    }
}