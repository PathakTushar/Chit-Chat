import { compare } from "bcrypt";
import { User } from "../models/user.js"
import { removeToken, sendToken } from "../utils/features.js";
import { ErrorHandler } from "../utils/utility.js";
import { TryCatch } from "../middlewares/error.js";

const newUser = async(req, res) => {
    const {name, username, password, bio} = req.body;

    const avatar = {
        public_id: "dsa",
        url: "sad",
    }
    const user = await User.create({
        name,
        username,
        password,
        bio,
        avatar,
    })

    sendToken(res, user, 201, "User Created Successfully")

    // res.status(201).json({message: "User Created Successfully"});
}

const login = async(req, res, next) => {
    const {username, password} = req.body;

    const user = await User.findOne({username}).select("+password");
    // console.log(user);

    if(!user){
        return next(new ErrorHandler("Invalid Username", 404))
    }
    const isMatch = await compare(password, user.password);

    if(!isMatch){
        return next(new ErrorHandler("Invalid Password", 404))
    }

    sendToken(res, user, 200, `Welcome Back, ${user.name}`)

}


const getMyProfile = TryCatch(async(req, res) => {
    const  user = await User.findById(req.user)

    res.status(200).json({
        success: true,
        user,
    })
})

const logout = (req, res)=>{
    removeToken(res, 200, "Logged out successfully");
}

export {login, newUser, getMyProfile, logout};


