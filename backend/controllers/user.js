const User = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const handleSignUp = async(req,res)=>{
    
    try{
        const {fname, lname, email, password} =  req.body
      
        const userexist = await User.findOne({email})
        if(userexist){
           return res.status(400).json({message:'User Already Exist'})
        }
        const hashPassword =await bcrypt.hash(password, 10)
         const newUser = new User({fname, lname, email, password:hashPassword})

         await newUser.save()

         res.status(201).json({message:'User Created Successfully'})
    }
    catch(error){
         res.status(500).json({message:'Error from server',error})
    }
}

const handleLogin = async(req,res)=>{
  try{
    const {email, password}=  req.body
   
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message:'Invalid Email or Password'})
    }
    
    const matchPass = await bcrypt.compare(password, user.password)
    if(!matchPass){
        return res.status(400).json({message:'Invalid Email or Password'})
    }

    const token = jwt.sign(
        {id:user._id, email:user.email},
        process.env.SCRET_KEY,
        {expiresIn:'1h'}
    )

    res.status(200).json({message:'Login Successfully', token, fname:user.fname, lname:user.lname})
   
  }catch(error){
    res.status(500).json({message:'Error from server'})
  }
}

module.exports ={
    handleSignUp,
    handleLogin,
}