const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },
    number: { 
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.models.User || mongoose.model("User", UserSchema);