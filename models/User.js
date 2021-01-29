const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "Email is required!",
    },
    password: {
        type: String,
        required: "Password is required!",
    },
    firstName: {
        type: String,
        required: "First Name is required!",
    },
    lastName: {
        type: String,
        required: "Last Name is required!",
    },
    dob: {
        type: Date,
        required: "Date of Birth is required!",
    },
    role : {
        type : String,
        enum : ['user','admin'],
        required: true
    }
},
{
  timestamps: true,
});


module.exports = mongoose.model('User', UserSchema);


