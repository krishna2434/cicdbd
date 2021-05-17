const PersonalDetails = require('../model/PersonDetails');


exports.allPersonalDetails = async (req, res) => {
    await PersonalDetails.find((err, personalDetails) => {
        if (err) {
            res.send(err);
            if (personalDetails = null) {
                res.send("Data is Empty");
            }
        } else {
            return res.status(200).json({
                status: "personalDetails data is found",
                data: personalDetails
            })
        }
    })
};


exports.getPersonalDetails = async (req, res) => {
    await PersonalDetails.findById(req.params.id, (err, personalDetail) => {
        if (err) {
            res.status(400).json({
                status: "personalDetail id is not found",
                statuscode: 400,
                data: err
            })
        } else {
            return res.status(200).json({
                status: "personalDetail id is Successfull found",
                data: personalDetail
            })
        }
    }).exec();

};


exports.addPersonalDetails = async (req, res) => {
    let personalDetail = new PersonalDetails(req.body);
    var query = { code: personalDetail.code };
    await PersonalDetails.find(query).findOne((err, result) => {
        if (err) throw err;
        if (result == null) {
            personalDetail.save((err) => {
                if (err) {
                    return res.status(400).json({
                        status: " personalDetailis not Created ",
                        statuscode: 400,
                        data: err
                    })
                } else {
                    res.status(200).json({
                        status: " PersonalDetails is Successfull  Created ",
                        data: personalDetail
                    })
                }
            })
        }
    })
};


exports.deletePersonalDetails = async (req, res) => {
    let personalDetail = await PersonalDetails.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            return res.status(400).json({
                status: "personalDetail is not deleted",
                statuscode: 400,
                data: err
            })
        } else {
            return res.status(200).json({
                status: "personalDetail is Successfull deleted",
                statuscode: 200,
            })
        }
    })
};


exports.updatePersonalDetails = async (req, res) => {
    let dbPersonalDetail = await PersonalDetails.findById(req.params.id).exec();
    if (dbPersonalDetail != null) {
        var editPersonalDetails = {
            Name: req.body.Name,
            Email: req.body.Email,
            Mobile: req.body.Mobile,
            PanCard_No: req.body.PanCard_No,
            Account_No: req.body.Account_No,
            Ifsc_Code: req.body.Ifsc_Code
        }

        await PersonalDetails.findByIdAndUpdate({ _id: req.params.id }, editPersonalDetails, function (err, personalDetail) {
            if (err) throw err;
            return res.status(200).json({
                status: "personalDetail Successfull Updated",
                data: editPersonalDetails
            })
        });
    }
};









