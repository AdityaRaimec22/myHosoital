import connectDB from "../../../middleware/mongoose";
import Doctor from "../../../models/Doctor";

const DoctorFunc = async (req, res) => {
    switch (req.method) {
        case 'POST': {
            console.log(req.body)
            try {
                const DoctorData = new Doctor(req.body);
                const savedDoctor = await DoctorData.save();

                res.status(201).json({ savedDoctor });
            } catch (error) {
                console.log(error);
                res.status(500).json({ message: "Error Creating Doctor" });
            }
        }
            break;

        case 'GET':
            try {
                if (req.query.id) {
                    const DoctorData = await Doctor.find({ "_id": req.query.id }, '-_id -__v')
                        .populate('Patients');
                    return res.status(200).json(DoctorData);
                } else if (req.query.HospitalId) {
                    const HospitalDoctors = await Doctor.find({ "HospitalId": req.query.HospitalId }, '-_id -__v').populate('Patients');
                    return res.status(200).json(HospitalDoctors);
                }
                else {
                    res.status(400).json({ message: "Bhaiya Id Chahiye yaar" });
                }
            } catch (error) {
                console.log(error);
                return res.status(400).json({ message: "Error getting Doctor" });
            }
            break;

        case 'PUT':
            try {
                const { id, CurrentNumber, LastNumber, patientId } = req.body;
                console.log("The current number is: ",CurrentNumber);

                if (!id) {
                    return res.status(400).json({ message: "Doctor id and currentNumber are required" });
                }

                if(CurrentNumber !== undefined) {
                    const updatedDoctor = await Doctor.findByIdAndUpdate(
                        id,
                        { CurrentNumber: CurrentNumber },
                        { new: true, runValidators: true, context: 'query' }
                    );
                    // const savedUpdatedDoctor = await updatedDoctor.save();
    
                    if (!updatedDoctor) {
                        return res.status(404).json({ message: "Doctor not found" });
                    }
    
                    return res.status(200).json(updatedDoctor);
                }

                if(LastNumber !== undefined && patientId !== undefined) {
                    const updatedDoctor = await Doctor.findByIdAndUpdate(
                        id,
                        { LastNumber: LastNumber, $push: {Patients: patientId} },
                        { new: true, runValidators: true, context: 'query' }
                    );
    
                    if (!updatedDoctor) {
                        return res.status(404).json({ message: "Doctor not found" });
                    }
    
                    return res.status(200).json(updatedDoctor);
                }

            } catch (error) {
                console.log(error);
                return res.status(400).json({ message: "Error updating Doctor" });
            }
            break;


    }
}

export default connectDB(DoctorFunc);