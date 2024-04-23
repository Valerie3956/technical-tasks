import React, { useState, useContext } from "react";
import { StudentContext } from "../context/studentContext";

export default function Form(props){

    const {btnText, toggle, submit, _id, name, DOB, year, major, courses, isGraduated} = props

    const {} = useContext(StudentContext)

    const initData = {
        name : name || "",
      DOB: DOB || "",
      year: year || 0,
      major: major || "",
      courses: courses || [],
      isGraduated: isGraduated || false
    }

    const [formData, setFormData] = useState(initData);

    function handleChange(event){
const {name, value, type, checked} = event.target 
//handle the courses select boxes
if(name === "courses"){
    const updatedCourses = checked ? [...formData.courses, value] : formData.courses.filter((course) => course !== value)
setFormData((prevData) => ({
    ...prevData,
    courses : updatedCourses
}))
//handle the other inputs
} else {
   setFormData(prevData => ({
        ...prevData,
        [name] : type === "checkbox"? checked : value
    }))
}
    }

    function handleSubmit(event){
        event.preventDefault() 
        submit(formData, _id)
        setFormData(initData)
        toggle()
    }

    return(
        <div>
                <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Student's name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input
          type="date"
          name="DOB"
          placeholder="YYYY-MM-DD"
          value={formData.DOB}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Year:
        <select name="year" value={formData.year} onChange={handleChange} required>
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
          
        </select>
      </label>
      <br />
      <label>
        Major:
        <input
          type="text"
          name="major"
          placeholder="Student's major"
          value={formData.major}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Courses:
        <input
          type="checkbox"
          name="courses"
          value="Math"
          checked={formData.courses.includes("Math")}
          onChange={handleChange}
        />
        Math
        <input
          type="checkbox"
          name="courses"
          value="Science"
          checked={formData.courses.includes("Science")}
          onChange={handleChange}
        />
        Science
        <input
          type="checkbox"
          name="courses"
          value="English"
          checked={formData.courses.includes("English")}
          onChange={handleChange}
        />
        English
      </label>
      <br />
      <label>
        Graduated:
        <input
          type="checkbox"
          name="isGraduated"
          checked={formData.isGraduated}
          onChange={handleChange}
        />
      </label>
      <br />
            <button>{btnText}</button>
    </form>
        </div>
    )
}