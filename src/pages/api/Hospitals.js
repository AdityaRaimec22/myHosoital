import connectDB from "../../../middleware/mongoose";
import Hospital from "../../../models/Hospital";

const Hospitals = async (req, res) => {
    switch(req.method) {
        case 'POST':
            console.log(req.body);
            try {
                const hospital = new Hospital(req.body);
                const savedHospital = await hospital.save();
        
                res.status(201).json(savedHospital);
            } catch (error) {
                console.log(error);
                res.status(500).json({error: "Error creating Hospital"});
            }
            break;
        
        case 'GET':
            try {
                if(req.query.id) {
                    const HospitalData = await Hospital.find({"_id": req.query.id}, '-_id -__v')
                    res.status(200).json(HospitalData);
                } else {
                    res.status(400).json({message: "Bhaiya system id chahiye yaar"});
                }
            } catch (error) {
                console.log(error);
                return res.status(500).json({message: "Error retrieving hospital"});
            }
            break;
    }
}

export default connectDB(Hospitals);