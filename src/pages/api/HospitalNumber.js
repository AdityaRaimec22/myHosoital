import connectDB from "../../../middleware/mongoose";
import patient from "../../../models/patient";

const NumberInHospital = async (req, res) => {
    switch(req.method) {
        case 'POST':
            try {
                const patientNumber = new patient(req.body);
                const savedPatientNumber = await patientNumber.save();
        
                res.status(201).json(
                    savedPatientNumber
                );
            } catch (error) {
                console.log(error);
                res.status(500).json({message: "Error Aa gya beta"});
            }
            break;
        
        case 'GET':
            try {
                if(req.query.patientId) {
                    const HospitalNumber = await patient.find({"_id": req.query.patientId}, '-_id -__v');
                    return res.status(201).json({HospitalNumber});
                } else if(req.query.HospitalId) {
                    const HospitalNumber = await patient.find({"HospitalId": req.query.HospitalId}, '-_id -__v');
                    return res.status(201).json({HospitalNumber});
                } else if(req.query.DoctorId) {
                    const HospitalNumber = await patient.find({"DoctorId": req.query.DoctorId}, '-_id -__v');
                    return res.status(201).json({HospitalNumber});
                } else {
                    const HospitalNumber = await patient.find({}, '-_id -__v');
                    return res.status(201).json({HospitalNumber});
                }
                break;
            } catch (error) {
                console.log(error);
                return res.status(400).json({message: "Error getting Number"});
            }
    }
}

export default connectDB(NumberInHospital);
