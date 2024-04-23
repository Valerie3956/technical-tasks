import React, { useContext } from "react";
import { StudentContext } from "../context/studentContext";
import Student from "./Student";


export default function StudentList(){

const {studentsList} = useContext(StudentContext)

const students = studentsList.map(student => {
    return(
        <Student 
        {...student}
        key = {student._id}
        />
    )
})

    return (
        <div>
        <h1>I am a list of students</h1>
        {students}
        </div>
    )
}