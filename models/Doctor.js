const mongoose = require("mongoose");
import patient from "./patient";

const DoctorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Qualification: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true,
    },
    Gender: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String
    },
    HospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    CurrentNumber: {
        type: Number
    },
    LastNumber: {
        type: Number,
        default: 0,
    },
    Patients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient'
        }
    ]
});

export default mongoose.models.Doctor || mongoose.model("Doctor", DoctorsSchema);