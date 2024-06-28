import connectDB from "../../../middleware/mongoose";
import Doctor from "../../../models/Doctor";

const DoctorFunc = async (req, res) => {
    switch(req.method) {
        case 'POST': {
            console.log(req.body)
            try {
                const DoctorData = new Doctor(req.body);
                const savedDoctor = await DoctorData.save();
        
                res.status(201).json({savedDoctor});
            } catch (error) {
                console.log(error);
                res.status(500).json({message: "Error Creating Doctor"});
            }
        }
        break;

        case 'GET':
            try {
                if(req.query.id) {
                    const DoctorData = await Doctor.find({"_id": req.query.id}, '-_id -__v')
                    res.status(200).json(DoctorData);
                } else if(req.query.HospitalId) {
                    const HospitalDoctors = await Doctor.find({"HospitalId": req.query.HospitalId}, '-_id -__v');
                    res.status(200).json(HospitalDoctors);
                }
                else {
                    res.status(400).json({message: "Bhaiya Id Chahiye yaar"});
                }
            } catch (error) {
                console.log(error);
                return res.status(400).json({message: "Error getting Doctor"});
            }
            break;
    }
}

export default connectDB(DoctorFunc);