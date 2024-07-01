const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Must Provide Name'],
        trim:true,
        maxlength:[30, 'Name Cannot be More Than 30 Charecters'] //these are the validators
    },
    completed: {
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model('task', TaskSchema)