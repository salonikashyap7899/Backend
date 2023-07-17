const User = require('../model/userModel.js')

exports.home = (req, res) => {
    res.send('First Backend');
}

exports.createUser = async(req, res) => {
    // extract info
    try {
       const {name, email, password}  = req.body

       if(!name || !email || !password){
        throw new Error("Name and email are required")
       }

       const userExists = User.findOne({email})

       if (userExists) {
        throw new Error("User already exists")

       }

       const user = await User.create({
        name,
        email,
        password
       })

       res.status(201).json({
        success: true,
        message: "User login Successfully",
        user
       })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        
        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}




