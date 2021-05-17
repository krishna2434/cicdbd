const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code:{
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    joinedDate:{
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});


 module.exports = mongoose.model('Employee', employeeSchema);
 