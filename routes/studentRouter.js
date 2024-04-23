const express = require('express')
const studentRouter = express.Router()
const Student = require('../models/student')


//get all students

studentRouter.get('/', async (req, res, next) => {
    try {
        const allStudents = await Student.find()
        return res.status(200).send(allStudents)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

//get one student by ID

studentRouter.get('/:studentId', async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.studentId)
        return res.status(200).send(student)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

// post a student

studentRouter.post("/", async (req, res, next) => {
    try{
        const newStudent = new Student(req.body)
        const savedStudent = await newStudent.save()
        return res.status(201).send(savedStudent)
    } catch(error) {
        res.status(500)
        return next(error)
    }
})

//edit a student

studentRouter.put('/:studentId', async(req, res, next) => {
    try{
const updatedStudent = await Student.findByIdAndUpdate(
    req.params.studentId,
    req.body,
    {new : true}
)
return res.status(201).send(updatedStudent)
    } catch(error) {
res.status(500)
return next(error)
    }
})

//delete a student

studentRouter.delete('/:studentId', async (req, res, next) => {
    try{
        const deletedStudent = await Student.findByIdAndDelete(req.params.studentId)
        return res.status(201).send(`You have deleted ${deletedStudent.name}`)
    } catch (error) {
res.status(500)
return next(error)
    }
})

module.exports = studentRouter