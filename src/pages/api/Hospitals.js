import connectDB from "../../../middleware/mongoose";
import Hospital from "../../../models/Hospital";
import Doctor from "../../../models/Doctor";  // Ensure the Doctor model is imported

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
                res.status(500).json({ error: "Error creating Hospital" });
            }
            break;
        
        case 'GET':
            try {
                if(req.query.id) {
                    const HospitalData = await Hospital.findById({"_id":req.query.id}, '-_id -__v')
                        .populate({
                            path: 'Doctors',
                            populate: {
                                path: 'Patients',
                            }
                        });
                    return res.status(200).json(HospitalData);
                } else {
                    const HospitalData = await Hospital.find({})
                        .populate({
                            path: 'Doctors',
                            populate: {
                                path: 'Patients',
                            }
                        });
                    return res.status(200).json(HospitalData);
                }
            } catch (error) {
                console.log(error);
                return res.status(500).json({ message: "Error retrieving hospital" });
            }
            break;

        case 'PUT':
            try {
                const {id, DoctorId} = req.body;

                if (!id) {
                    return res.status(400).json({ message: "Doctor id and currentNumber are required" });
                }

                const NewDoctor = await Hospital.findByIdAndUpdate(
                    id,
                    {$push: {Doctors: DoctorId}},
                    { new: true, runValidators: true, context: 'query' }
                )

                if (!NewDoctor) {
                    return res.status(404).json({ message: "Doctor not found" });
                }

                return res.status(200).json(NewDoctor);
            } catch (error) {
                console.log(error);
                return res.status(400).json({ message: "Error updating Doctor" });
            }
    }
}

export default connectDB(Hospitals);
