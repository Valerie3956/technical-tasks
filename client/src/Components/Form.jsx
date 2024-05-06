import React, { useState, useContext, useEffect } from "react";
import { StudentContext } from "../context/studentContext";

export default function Form(props) {

  const { btnText, toggle, submit, _id, name, DOB, year, major, courses, isGraduated } = props

  const { } = useContext(StudentContext)

  useEffect(() => {
    setFormData({
      name: name || "",
      DOB: DOB || "",
      year: year || 0,
      major: major || "",
      courses: courses || [],
      isGraduated: isGraduated || false
    });
  }, [name, DOB, year, major, courses, isGraduated]);

  const initData = {
    name: name || "",
    DOB: DOB || "",
    year: year || 0,
    major: major || "",
    courses: courses || [],
    isGraduated: isGraduated || false
  }

  const [formData, setFormData] = useState(initData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    //handle the courses select boxes
    if (name === "courses") {
      const updatedCourses = checked ? [...formData.courses, value] : formData.courses.filter((course) => course !== value)
      setFormData((prevData) => ({
        ...prevData,
        courses: updatedCourses
      }))
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
    setFormData(initData)
    toggle()
  }

  return (
    <div className="mx-auto w-[50vw]">
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
          Year:
          <select name="year" value={formData.year} onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>

          </select>
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
          <div className="mt-6 space-y-6">

          <div className="flex h-6 items-center">
            <input
              type="checkbox"
              name="courses"
              value="Math"
              checked={formData.courses.includes("Math")}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="Math" className="font-medium text-gray-900">
              Math
            </label>
</div>
<div className="flex h-6 items-center">
            <input
              type="checkbox"
              name="courses"
              value="Science"
              checked={formData.courses.includes("Science")}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />

            <label htmlFor="Science" className="font-medium text-gray-900">
              Science
            </label>
</div>
<div className="flex h-6 items-center">
            <input
              type="checkbox"
              name="courses"
              value="English"
              checked={formData.courses.includes("English")}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />

            <label htmlFor="English" className="font-medium text-gray-900">
              English
            </label>
</div>
          </div>

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