const mongooes =require('mongoose');

require('./EmployeeModel'); 
require('dotenv').config({ path: 'mainDB.env' });
mongooes.connect(process.env.DB,
{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true, useFindAndModify:false},
(err)=>
{
    if(!err){
        console.log("Monogooes Connection started..!!!!")
    }else
    {
        console.log("erro in DB connection"+err)
    }
});