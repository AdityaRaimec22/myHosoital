const mongoose = require("mongoose");

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
        type: Number,
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
})

const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    established: {
        type: String
    },
    img: {
        data: Buffer,
        contentType: String
    },
    facilities: [
        {
            name: {
                type: String,
                required: true
            }
        }
    ],
    doctors: [
        DoctorsSchema
    ]
});

export default mongoose.models.HospitalSchema || mongoose.model("HospitalSchema", HospitalSchema);