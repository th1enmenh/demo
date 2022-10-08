var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

router.get('/', (req, res) => {
    StudentModel.find((err, data) => {
        if(!err) {
            //res.send(data)
            res.render('student/index', {student: data})
        }
    })
})

module.exports = router