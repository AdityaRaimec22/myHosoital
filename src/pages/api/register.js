// import connectDb from "../../../middlewares/mongoose";
import connectDB from "../../../middleware/mongoose";
import User from "../../../models/User";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

const register = async (req, res) => {
    const { name, number, password } = req.body;
    // console.log("the data is: ", name, phone, password);

    try {
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);

        const existingUser = await User.findOne({ number });

        if(number.length < 10) {
            return res.status(500).json({ message: "Phone number is invalid baccha"});
        }

        if (existingUser) {
            return res.status(400).json({ message: "User already registered" });
        }

        console.log("the data is: ", name, number, password);

        const newUser = new User({
            name: name,
            number: number,
            password: secPass,  // corrected field name to 'password'
        });

        await newUser.save();

        const data = {
            user: {
                id: newUser._id,
                name: newUser.name,
                number: newUser.number
            }
        };

        const authToken = jwt.sign(data, process.env.JWT_SECRET);

        // Set the cookie using setHeader method
        res.setHeader('Set-Cookie', cookie.serialize('authToken', authToken, {
            maxAge: 60 * 60 * 24 * 30, // 1 week
            sameSite: 'strict',
        }));

        return res.status(200).json({
            authToken: authToken,
            data: data
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error" });
    }
}

export default connectDB(register);
