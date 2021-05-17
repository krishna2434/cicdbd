const mongoose = require('mongoose');

var PersonalDetailsSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    code:{
        type: String,
        unique: true,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Mobile: {
        type: String,
        required: true
    },
    PanCard_No:{
        type: String,
        required: true
    },
    Account_No:{
        type: String,
        required: true
    },
    Ifsc_Code: {
        type: String,
        required: true
    }
});


 module.exports = mongoose.model('PersonalDetails', PersonalDetailsSchema);
 