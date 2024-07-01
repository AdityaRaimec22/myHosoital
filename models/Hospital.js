const mongoose = require("mongoose");
import Doctor from "./Doctor";

const Hospital = new mongoose.Schema({
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
    pinCode: {
        type: Number,
        required: true
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
    Doctors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor'
        }
    ]
});

export default mongoose.models.Hospital || mongoose.model("Hospital", Hospital);
