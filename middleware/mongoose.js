import mongoose from "mongoose";

// Directly embedding the MongoDB connection URL
const MONGO_URL = "mongodb+srv://adityaraimec22:demouser@cluster0.iavkhha.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = handler => async (req, res) => {
    try {
        if (mongoose.connections[0].readyState) {
            return handler(req, res);
        }
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected to DB');
        return handler(req, res);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        res.status(500).json({ error: "An error occurred while connecting to the database" });
    }
}

export default connectDB;
