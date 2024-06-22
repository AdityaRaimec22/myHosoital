import connectDB from "../../../middleware/mongoose";
import Hospital from "../../../models/Hospital";

const Hospitals = async (req, res) => {
    try {
        const hospital = new Hospital(req.body);
        const savedHospital = await hospital.save();

        res.status(201).json(savedHospital);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Error creating Hospital"});
    }
}

export default connectDB(Hospitals);