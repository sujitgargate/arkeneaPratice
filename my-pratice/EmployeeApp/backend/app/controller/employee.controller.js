const employeeService = require('../services/employee.service')
exports.create = function (req, res) {
    req.assert("name", "Name should not be empty").notEmpty();

    var error = req.validationErrors();
    if (error) {
        return res.status(400).send(error);
    }
    employeeService.createemployee(req, res);
}

exports.update = function (req, res) {
    req.assert("name", "Name should not be empty").notEmpty();
    var error = req.validationErrors();
    if (error) {
        return res.status(400).send(error);
    }
    employeeService.update(req, res);
}

exports.get = function (req, res) {
    employeeService.get(req, res)
}

exports.delete = function (req, res) {
    employeeService.delete(req, res);
}

exports.getById = function(req, res){
    employeeService.getById(req, res);
}

exports.getByName = function(req, res){
    //console.log('testing ');
    employeeService.getByName(req, res);
}