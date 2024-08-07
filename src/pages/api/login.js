import connectDB from "../../../middleware/mongoose";
import User from "../../../models/User";
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const JWT_SECRET = process.env.JWT_SECRET;
const cookie = require("cookie");

const login = async (req, res) => {
    switch (req.method) {
        case 'POST': {
            const {number, password} = req.body;
            console.log(number);
            try {
                const existingUser = await User.findOne({ number });
                console.log(existingUser);
                if(!existingUser) {
                    return res.status(404).json({ message: "kya kr rha hai bhai tu"})
                }
                
                const storedPassword = existingUser.password;
                const isMatch = bcrypt.compare(password, storedPassword);
        
                if(isMatch) {
                    const data = {
                        user: {
                            id: existingUser._id,
                            success: true,
                            name: existingUser.name
                        }
                    }
        
                    const authToken = jwt.sign(data, JWT_SECRET);
        
                    res.setHeader('Set-Cookie', cookie.serialize('authToken', authToken, {
                        httpOnly: true,
                        secure: true,
                        maxAge: 60 * 60 * 24 * 30, // 1 week
                        sameSite: 'strict',
                        path: '/'
                    }));
        
                    return res.status(200).json({
                        authToken: authToken,
                        data: data,
                        isLoggedIn: true
                    })
                } else {
                    return res.status(401).json({message: "Chor betichod"});
                }
        
            } catch (error) {
                return res.status(500).json({message: "Internal server error!"})
            }
        } 
        break;

        case 'GET':
            try {
                console.log("Idhar hu me bitch", req.query.id);
                if(req.query.id) {
                    const user = await User.findById({"_id": req.query.id}, '-_id -__v');
                    return res.status(200).json(user); 
                }
            } catch (error) {
                console.log(error);
            }
            break;

        case 'PUT':
            try {
                const {userId, HospitalAdmin} = req.body;

                if(!userId) {
                    return res.status(400).json({ message: "Doctor id and currentNumber are required" });
                }

                const updatedUser = await User.findByIdAndUpdate(
                    userId,
                    {$push: {HospitalAdmin: HospitalAdmin}}
                )

                res.status(201).json({updatedUser});
            } catch (error) {
                console.log("error occured: ", error);
            }
            break;

    }
}

export default connectDB(login);