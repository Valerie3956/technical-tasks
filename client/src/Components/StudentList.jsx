import React, { useContext, useState, useEffect } from "react";
import { StudentContext } from "../context/studentContext";
import Student from "./Student";


export default function StudentList(){

    const {studentsList} = useContext(StudentContext)
    
    const [renderedStudents, setRenderedStudents] = useState([])

    const [searchQuery, setSearchQuery] = useState("");
    
    const searchHandler = event => {
        
    setSearchQuery(event.target.value.toLowerCase())

    }

    useEffect(() => {

        let displayedStudents = studentsList.filter(student => {
            let searchValue = student.name.toLowerCase()
            return searchValue.indexOf(searchQuery) !== -1
        })
        console.log(displayedStudents)
        setRenderedStudents(displayedStudents)
    }, [studentsList, searchQuery])

//searching for different elements




const students = renderedStudents.map(student => {
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
            <input type = "text" className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange = {searchHandler} placeholder = "Student Lookup"/>
        {students}
        </div>
    )
}