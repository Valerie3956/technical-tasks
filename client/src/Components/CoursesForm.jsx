import React, { useState, useContext, useEffect } from "react";
import { CoursesContext } from "../context/coursesContext";
import Select from "react-select"
import axios from "axios";

export default function CoursesForm(props){

const {name, credits, availability, syllabus, btnText, submit, _id} = props

    useEffect(() => {
        setFormData({
            name: name || "",
            credits: credits || 0,
            availability: availability || 0,
            syllabus: syllabus || ""
        });
      }, [name, credits, availability, syllabus]);

    const initData = {
        name: name || "",
        credits: credits || 0,
        availability: availability || 0,
        syllabus: syllabus || ""
      }
   
    const [formData, setFormData] = useState(initData);


    //add error handler so the form doesn't get cleared unles res.status is 200
    function handleChange(event) {
        const { name, value, type, checked } = event.target
          setFormData(prevData => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
            [name]: name === 'credits' || name === 'availability' ? Number(value) : value
          }))
      }
    
      function handleSubmit(event) {
        event.preventDefault()
        submit(formData, _id)
        // console.log(formData)
        setFormData(initData)
        // _id? toggle() : console.log("no toggle func")
      }

      return(
        <div className="mx-auto w-full">
      <form onSubmit={handleSubmit}>
      <label className="block text-sm font-medium leading-6 text-gray-900">
          Name:
          <input
            type="text"
            name="name"
            placeholder="Course Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Credits:
          <input
            type="number"
            name="credits"
            placeholder="Credits"
            value={formData.credits}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Spots Available:
          <input
            type="number"
            name="availability"
            placeholder="Spots Available"
            value={formData.availability}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Syllabus:
          <input
            type="textarea"
            name="syllabus"
            placeholder="Syllabus"
            value={formData.syllabus}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </label>
        <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{btnText}</button>
      </form>
      </div>
      )
}