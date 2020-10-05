const mongoose = require('mongoose')
const EmployeeSchema = mongoose.Schema({
    name: {
        type: String,
        //required: true
    },

    address: {
        type: String
    },
    emailAddress: {
        type: String
    },

    phoneNumber: {
        type: Number
    },

    
    DateOfBirth: {
        type: Date,
    },

    imageUrl: {
        type: String,

    },
})

module.exports = mongoose.model('Employee', EmployeeSchema)