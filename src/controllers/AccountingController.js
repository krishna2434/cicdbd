const Accounting = require('../model/AccountingModel');


exports.allAccounting = async (req, res) => {
    await Accounting.find((err, accounting) => {
        if (err) {
            res.send(err);
            if (accounting = null) {
                res.send(" Data is Empty ");
            }
        } else {
            return res.status(200).json({
                status: " Accounting data is found ",
                data: accounting
            })
        }
    })
};

exports.getAccounting = async (req, res) => {
    await Accounting.findById(req.params.id, (err, accounting) => {
        if (err) {
            res.status(400).json({
                status: " Accounting id is not found ",
                statuscode: 400,
                data: err
            })
        } else {
            return res.status(200).json({
                status: " Accounting id is Successfull found ",
                data: accounting
            })
        }
    }).exec();
};

exports.addAccounting = async (req, res) => {
    let accounting = new Accounting(req.body);
    var query = { code: accounting.code };
    await Accounting.find(query).findOne((err, result) => {
        if (err) throw err;
        if (result == null) {
            accounting.save((err) => {
                if (err) {
                    return res.status(400).json({
                        status: " Accounting is not Created ",
                        statuscode: 400,
                        data: err
                    })
                } else {
                    return res.status(200).json({
                        status: " Accounting is Successfull Created ",
                        data: accounting
                    })
                }
            })
        }
    })
};

exports.deleteAccounting = async (req, res) => {
    let accounting = await Accounting.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            return res.status(400).json({
                status: " Accounting is not deleted ",
                statuscode: 400,
                data: err
            })
        } else {
            return res.status(200).json({
                status: " Accounting is Successfull deleted ",
                statuscode: 200
            })
        }
    })
};


exports.updateAccounting = async (req, res) => {
    let dbAccounting = await Accounting.findById(req.params.id).exec();
    if (dbAccounting != null) {
        var editAccounting = {
            Name: req.body.Name,
            Device: req.body.Device,
            Config: req.body.Config,
            Reg_No: req.body.Reg_No,
            Device_History: req.body.Device_History
        }
        await Accounting.findByIdAndUpdate({ _id: req.params.id }, editeAccounting, function (err, accounting) {
            if (err) throw err;
            return res.status(200).json({
                status: " Accounting Successfull Updated ",
                data: editAccounting
            })
        });
    }
};
