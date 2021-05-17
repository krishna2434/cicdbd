const Employee = require('../model/EmployeeModel');


//Get-//AllEmployees
exports.allEmployees = async (req, res) => {
    await Employee.find((err, employees) => {
        if (err) {
            res.send(err);
            if (employees = null) {
                res.send("Data is Empty");
            }
        } else {
            return res.send(employees);
        }
    })
};

//Get-//Employee/{1}by ID
exports.getEmployee = async (req, res) => {
    await Employee.findById(req.params.id, (err, employee) => {
        if (err) {
            res.status(400).json({
                status: "Employee id is not found",
                statuscode: 400,
                data: err
            })
        } else {
            return res.send(employee);
        }
    }).exec();

};

//post-/create new employee and insert data
exports.addEmployee = async (req, res) => {
    let employee = new Employee(req.body);
    var query = { code: employee.code };
    await Employee.find(query).findOne(function (err, result) {
        if (err) throw err;
        if (result == null) {
            employee.save((err) => {
                if (err) {
                    return res.status(400).json({
                        status: "Employee is not Created",
                        statuscode: 400,
                        data: err
                    })
                } else {
                    return res.status(200).json({
                        status: "Employee is Successfull Created",
                        data: employee
                    })

                }
            })
        }
    })
};

//Delete-employee base on Id
exports.deleteEmployee = async (req, res) => {
    let employee = await Employee.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            return res.status(400).json({
                status: "Employee is not deleted",
                statuscode: 400,
                data: err
            })
        } else {
            return res.status(200).json({
                status: "Employee Successfull deleted",
                statuscode: 200,
            })
        }
    })
};

//Post-/Employee//updateEmployee with one Employee on Id
exports.updateEmployee = async (req, res) => {
    let dbEmployee = await Employee.findById(req.params.id).exec();
    if (dbEmployee != null) {
        var editEmployee = {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            department: req.body.department,
            joinedDate: req.body.joinedDate,
            role: req.body.role
        }

        await Employee.findByIdAndUpdate({ _id: req.params.id }, editEmployee, function (err, employee) {
            if (err) throw err;
            return res.send(editEmployee);
        });
    }
};







