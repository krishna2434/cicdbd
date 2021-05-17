const mongoose = require('mongoose');

var AccountingSchema = new mongoose.Schema({
    code:{
        type: String,
        unique: true,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Device: {
        type: String,
        required: true
    },
    Config: {
        type: String,
        required: true
    },
    Reg_No:{
        type: String,
        required: true
    },
    Device_History: {
        type: String,
        required: true
    }
});


 module.exports = mongoose.model('Accounting', AccountingSchema);