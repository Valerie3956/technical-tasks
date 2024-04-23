const mongoose = require('mongoose')
const Schema = mongoose.Schema


const studentSchema = new Schema({
name : {
    type : String,
    required : true
},
DOB : {
    type: Date,
    required : true
},
year : {
    type : Number,
    required: true
},
major : {
    type : String,
    required : true
},
courses : {
    type : Array,
    required : false
},
isGraduated : {
    type : Boolean,
    required : true
}
})

module.exports = mongoose.model('Student', studentSchema)