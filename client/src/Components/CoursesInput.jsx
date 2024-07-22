import React, {useContext, useState} from "react";
import { CoursesContext } from "../context/coursesContext";
import CoursesForm from "./CoursesForm";
import Course from "./Course";


export default function CoursesInput(){

    const {coursesList, createCourse} = useContext(CoursesContext)
    
    // console.log(coursesList)

    const list = coursesList.map(course => {
        return(
           <Course
           name = {course.name}
           credits = {course.credits}
           availability = {course.availability}
           syllabus = {course.syllabus}
           _id = {course._id}
           key = {course._id}
           />
        )
    })


    return(
        <>
        <CoursesForm
        btnText = "Add Course"
        submit = {createCourse}
        />
        {list}
        </>
    )
}