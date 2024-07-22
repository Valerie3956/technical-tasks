import React, { useState, useContext, useEffect } from "react";
import { StudentContext } from "../context/studentContext";
import Select from "react-select"
import axios from "axios";

//give form a more descriptive name
export default function Form(props) {

  const { btnText, toggle, submit, _id, name, DOB, enrollementDate, year, major, courses, isGraduated } = props

  // const { } = useContext(StudentContext)

  useEffect(() => {
    setFormData({
      name: name || "",
      DOB: DOB || "",
      enrollementDate : enrollementDate || "",
      year: year || 0,
      major: major || "",
      courses: courses || [],
      isGraduated: isGraduated || false
    });
  }, [name, DOB, year, major, courses, isGraduated]);

  const initData = {
    name: name || "",
    DOB: DOB || "",
    enrollementDate : enrollementDate || "",
    year: year || 0,
    major: major || "",
    courses: courses || [],
    isGraduated: isGraduated || false
  }

  const [formData, setFormData] = useState(initData);

  const [courseOptions, setCourseOptions] = useState([])
  
  useEffect(() => {
    axios.get("/courses")
    .then(res => {

      const mappedCourses = []

    res.data.map(course => {
      mappedCourses.push({
        value: `${course._id}`,
        label : `${course.name}`
      })
    })

    setCourseOptions(mappedCourses)

  })
  .catch(err => console.log(err))
}, [])




  function handleChange(event) {
    const { name, value, type, checked } = event.target
    //handle the courses select boxes
    if (name === "courses") {
      const selectedCourses = value.map(option => option.value);
      setFormData(prevData => ({
        ...prevData,
        courses: selectedCourses
      }));
      //handle the other inputs
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    submit(formData, _id)
    console.log(formData)
    setFormData(initData)
    _id? toggle() : console.log("no toggle func")
  }

  return (
    <div className="mx-auto w-full">
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Name:
          <input
            type="text"
            name="name"
            placeholder="Student's name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <br />
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Date of Birth:
          <input
            type="date"
            name="DOB"
            placeholder="YYYY-MM-DD"
            value={formData.DOB}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <br />
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Enrollement Date:
          <input
            type="date"
            name="enrollementDate"
            placeholder="YYYY-MM-DD"
            value={formData.enrollementDate}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <br />
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Major:
          <input
            type="text"
            name="major"
            placeholder="Student's major"
            value={formData.major}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <br />

        <label className="block text-sm font-medium leading-6 text-gray-900">

          Courses:
<Select options = {courseOptions}
onChange = {selectedCourses => handleChange({target: {name: "courses", value : selectedCourses}})}
value = {courseOptions.filter(course => formData.courses.includes(course.value))}
isMulti/>

        </label>


 
        <br />

        <label className="block text-sm font-medium leading-6 text-gray-900">
          Graduated:
          <input
            type="checkbox"
            name="isGraduated"
            checked={formData.isGraduated}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </label>
        <br />
        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{btnText}</button>
      </form>
    </div>
  )
}