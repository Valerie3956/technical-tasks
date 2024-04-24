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
        <div className="mx-auto w-[50vw]">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-8">Enrolled students</h1>
        {students}
        </div>
    )
}