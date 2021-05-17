const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const EmployeeController = require('./src/controllers/EmployeeController');
const PersonalDetailsController = require('./src/controllers/PersonalDetailsController');
const AccountingController = require('./src/controllers/AccountingController');

require('./src/model/mongodb');

const app = express();
const PORT = 5555;
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(cors());


//Employee Directory
app.get('/employees',EmployeeController.allEmployees);
app.get('/employee/:id',EmployeeController.getEmployee);
app.post('/employee',EmployeeController.addEmployee);
app.delete('/employee/:id',EmployeeController.deleteEmployee);
app.put('/employee/:id',EmployeeController.updateEmployee);

// Accounting Directory
app.get('/accounts',AccountingController.allAccounting);
app.get('/account/:id',AccountingController.getAccounting);
app.post('/account',AccountingController.addAccounting);
app.delete('/account/:id',AccountingController.deleteAccounting);
app.put('/account/:id',AccountingController.updateAccounting);

// HR Directory / PersonalDetails Directory
app.get('/personaldetails',PersonalDetailsController.allPersonalDetails);
app.get('/personaldetail/:id',PersonalDetailsController.getPersonalDetails);
app.post('/personaldetail',PersonalDetailsController.addPersonalDetails);
app.delete('/personaldetail/:id',PersonalDetailsController.deletePersonalDetails);
app.put('/personaldetail/:id',PersonalDetailsController.updatePersonalDetails);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

module.exports = {
    app
  };
  