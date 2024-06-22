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

export default mongoose.models.DoctorsSchema || mongoose.model("DoctorsSchema", DoctorsSchema);