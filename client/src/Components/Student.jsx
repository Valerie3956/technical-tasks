import React, {useState, useContext} from "react"
import Form from "./Form"
import { StudentContext } from "../context/studentContext"

export default function Student(props){

    const [toggle, setToggle] = useState(false)
    const { deleteStudent, editStudent } = useContext(StudentContext)
    const{name, DOB, year, major, courses, isGraduated, _id} = props



    return(
        <div>
            <h3>Name : {name}</h3>
            <h4>Data Of Birth : {DOB.slice(0,10)}</h4>
            <h4>Year : {year}</h4>
            <h4>Major : {major}</h4>
            {courses.length > 0 && <>
            <h4>Courses</h4>
            {courses.map(course => {
                return <li>{course}</li>
            })}
            </>}
            {isGraduated && <h4>Graduated</h4>}
            {toggle? 
            <div>

            <Form
            btnText = "Edit"
            toggle = {() => setToggle(prevToggle => !prevToggle)}
            _id = {_id}
            submit = {editStudent}
            name = {name}
            DOB = {DOB.slice(0,10)}
            year = {year}
            major = {major}
            courses = {courses}
            isGraduated = {isGraduated}
            /> 
            <button onClick = {() => setToggle(prevToggle => !prevToggle)}>Close</button>
            </div>
            :
            <button onClick = {() => setToggle(prevToggle => !prevToggle)}>Edit Student</button>
             }
            <button onClick = {() => deleteStudent(props._id)}>Delete Student</button>

        </div>
    )
}