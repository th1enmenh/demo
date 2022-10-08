const mongoose = require ('mongoose')
const schema = mongoose.Schema
const model = mongoose.Model

var StudentSchema = new schema(
    {
    name: String, 
    email: String,
    gender: String,
    image: String,
    dob: Date,
    year: Number,
    grade: Number
    },
    {
        versionKey: false
    }
)

var StudentModel = mongoose.model("student", StudentSchema, 'student')
module.exports = StudentModel