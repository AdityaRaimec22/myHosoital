import mongoose from "mongoose";

const connectDB = handler => async (req, res) => {
    try {
        if(mongoose.connections[0].readyState){
            return handler(req, res);
        }
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connectedtoDb');
        return handler(req, res);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        res.status(500).json({error: "An error occured while connecting to the database"});
    }
}

export default connectDB;