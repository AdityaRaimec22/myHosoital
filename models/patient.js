const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    patientNumber: {
        type: Number,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    patientAge: {
        type: Number,
        required: true
    },
    patientGender: {
        type: String,
        required: true
    },
    DoctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    HospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    }
});

export default mongoose.models.Patient || mongoose.model("Patient", patientSchema);

