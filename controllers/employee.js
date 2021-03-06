const Employee = require('../models').Employee;
const { Op } = require("sequelize");

const all = (req, res) => {
    return Employee.findAll({
        // attributes: ['id', 'name', ['employeeStatus', 'Employee Status']]
        
    })
    .then( (emps) =>{
        res.send(JSON.stringify(emps));
    })

}

const byId = (req, res) => {
    let empId = req.params.id;
    return Employee.findOne({
        where: {
            id: empId
        },
    })
    .then( (emp) => {
        res.send(JSON.stringify(emp));
    })
}
const createEmployee =(req,res) => {
    return Employee.create({
        name:req.body.name,
        alias:req.body.alias,
        phoneNo:req.body.phoneNo,
        nrcNo:req.body.nrcNo,
        personalEmail:req.body.personalEmail,
        officialEmail:req.body.officialEmail,
        township:req.body.township,
        city:req.body.city,
        address:req.body.address,
        postalCode:req.body.postalCode,
        dob:new Date(req.body.dob),
        gender:req.body.gender,
        position:req.body.position,
        basicSalary:req.body.basicSalary,
        nationality:req.body.nationality,
        race:req.body.race,
        maritalStatus:req.body.maritalStatus,
        employeeStatus:req.body.employeeStatus,
        photo:req.body.photo,
        userName:req.body.userName,
        password:req.body.password

    }).then(result => {
        res.send(JSON.stringify(result));
      })
      .catch(err => res.send(JSON.stringify(err)));
    
}
const deleteEmployee =(req,res) => {
    const id = req.body.id;
   return  Employee.destroy({
        where: {
            id: id
        }
    }).then(result => {
        res.send(JSON.stringify(result));
      })
      .catch(err => res.send(JSON.stringify(err)));
}

const updateEmployee=(req,res)=>{
    const id = req.body.id;
    return Employee.update({  
        name:req.body.name,
        alias:req.body.alias,
        phoneNo:req.body.phoneNo,
        nrcNo:req.body.nrcNo,
        personalEmail:req.body.personalEmail,
        officialEmail:req.body.officialEmail,
        township:req.body.township,
        city:req.body.city,
        address:req.body.address,
        postalCode:req.body.postalCode,
        dob:new Date(req.body.dob),
        gender:req.body.gender,
        position:req.body.position,
        basicSalary:req.body.basicSalary,
        nationality:req.body.nationality,
        race:req.body.race,
        maritalStatus:req.body.maritalStatus,
        employeeStatus:req.body.employeeStatus,
        photo:req.body.photo,
        userName:req.body.userName,
        password:req.body.password
        },{
            where: {
                id: id
            }               
        }).then(result => {
            res.send(JSON.stringify(result));
          })
          .catch(err => res.send(JSON.stringify(err)));
}
const searchByemployeeId = (req, res) => {
    let empId = req.body.employeeId;
    return Employee.findAll({
        where: {
            id: empId
        }
    })
    .then( (emp) => {
        res.send(JSON.stringify(emp));
    })
}
const searchEmlpoyee=(req,res) => {
    let searchEmp = req.params.all;
    console.log("search",searchEmp);
    return Employee.findAll({
        where: {
            [Op.or]:[
                {
                    id: { [Op.like] : [`%${searchEmp}%`] }
                },{
                    name: { [Op.like] : [`%${searchEmp}%`] }
                },{
                    gender: { [Op.like] : [`${searchEmp}%`] }
                },{
                    position: { [Op.like] : [`%${searchEmp}%`] }
                }
            ]
        }
    }).then( (result) =>{
        res.send(JSON.stringify(result));
    })
    .catch(err => res.send(JSON.stringify(err)));

}
const updateEmployeeImage = (req, res) => {
    let id = req.body.id;
    let photo = req.body.photo;
    Employee.update({
        photo: photo
    },{
        where: {
            id: id
        }
    }).then(result => {
        res.send(JSON.stringify(result));
    })
    .catch(err => res.send(JSON.stringify(err)));
}

module.exports = {
    all, byId,createEmployee,deleteEmployee,updateEmployee, searchByemployeeId, updateEmployeeImage,searchEmlpoyee
}