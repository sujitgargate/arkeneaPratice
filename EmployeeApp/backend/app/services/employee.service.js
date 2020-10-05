const moment = require('moment')
const { findByIdAndUpdate, findOneAndUpdate } = require('../model/employee.model.js')
const Employee = require('../model/employee.model.js')


exports.createRecipe = async function (req, res) {
    //console.log("in create");
    var employeeExists = await Employee.findOne({
        name: req.body.name
    })
    if (employeeExists) {
        res.status(400).send({
            message: 'Employee already exists, please try again. '
        })
    }
    else {

        //console.log(req.body);

        var newDate = moment(req.body.employeeCreatedDate).format('YYYY-MM-DD')
        var imageUrl = 'http://localhost:5000/' + req.file.filename

        let employee = new Employee({

            name: req.body.name,

            address: req.body.address,
            emailAddress: req.body.emailAddress,
            phoneNumber: req.body.phoneNumber,
            DateOfBirth: req.body.DateOfBirth,
            imageUrl: imageUrl
        })

        let employeeCreated = await Employee.create(recipe)
        res.status(200).send(recipeCreated)
    }
}


exports.update = async function (req, res) {
    //console.log('in update ' + req.body.name);
    var employeeExists = await Recipe.findOne({
        name: req.body.name
    })
    if (req.file) {
        var imageUrl = 'http://localhost:5000/' + req.file.filename
        req.body.imageUrl = imageUrl
    }
    if (employeeExists) {
        if (employeeExists._id !== req.body._id) {
            res.status(400).send({
                message: 'Employee already exists, please try again.'
            })
        }
        else {

            var updatedEmployee = await Employee.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true })
            res.status(200).send(updatedEmployee);
        }
    }
    else {
        var updatedEmployee = await Recipe.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true })
        res.status(200).send(updatedEmployee);
    }

}

exports.get = async function (req, res) {
    var allEmployee = await Employee.find();
    res.send(allEmployee)
}

exports.delete = async function (req, res) {
    await Employee.findByIdAndDelete(req.params.id)
}


exports.getById = async function (req, res) {
    var employee = await Employee.findById(req.params.id)
    res.send(employee);
}

exports.getByName = async function (req, res) {
    //debugger;
    console.log("value.." + req.body.name);
    var employee = await Employee.findOne({
        name: req.body.name
    })

    res.send(employee);
}