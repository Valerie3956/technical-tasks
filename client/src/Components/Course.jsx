import React, {useState, useContext} from "react";
import CoursesForm from "./CoursesForm";
import { CoursesContext } from "../context/coursesContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'

export default function Course(props){
    const [toggle, setToggle] = useState(false)
    const [viewCourse, setViewCourse] = useState(false)
    const [viewSyllabus, setViewSyllabus] = useState(false)
    // const { deleteCourse, editCourse } = useContext(StudentContext)
    const {name, credits, availability,syllabus, _id} = props

    async function removeCourse(id){
        try{
        //   await deleteCourse(id)
          setViewCourse(false)
          setToggle(false)
        } catch (error){
      console.log(error)
        }
      }


return(
    <div className="mx-auto w-[50vw] border border-gray-300 rounded-md my-2 p-2">
        {toggle?        
           <div className="px-2 sm:px-0">
        <div className="mt-6 flex flex-col items-center justify-end gap-x-6">
            {/* // student form */}
            <>
            <CoursesForm
            btnText = "Edit"
            toggle = {() => setToggle(prevToggle => !prevToggle)}
            _id = {_id}
            // submit = {editCourse}
            name = {name}
            credits = {credits}
            availability = {availability}
            syllabus = {syllabus}
            /> 
            <div className="mt-6 flex items-center justify-end gap-x-6">
            <button onClick = {() => setToggle(prevToggle => !prevToggle)} className="text-sm font-semibold leading-6 text-gray-900">Close</button>
            <button onClick = {() => removeCourse(_id)} className="text-sm font-semibold leading-6 text-gray-900"><FontAwesomeIcon icon={faTrash} /></button>
            </div>
            </>
            {/* // end of student form */}
            </div>
      </div>
      :
      <div className=" justify-between items-center">
          <div className="px-4 py-3 sm:grid sm:grid-cols-10 sm:gap-4 sm:px-0">
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-8 sm:mt-0">{name}</dd>
            {
              viewCourse?
              <>
              <button onClick = {() => setToggle(prevToggle => !prevToggle)} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><FontAwesomeIcon icon={faPenToSquare} /></button>
              <button onClick = {() => setViewCourse(prevToggle => !prevToggle)} className="h-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><FontAwesomeIcon icon={faEyeSlash} /></button>

              </>
              :
              <button onClick = {() => setViewCourse(prevToggle => !prevToggle)} className="h-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><FontAwesomeIcon icon={faEye} /></button>
            }
          </div>
          {/* additional student information */}
          {viewCourse && <>
          <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Credits</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{credits}</dd>
          </div>
          <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Availability</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{availability}</dd>
          </div>
          {viewSyllabus? 
                    <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Syllabus</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{syllabus}</dd>
                    <button onClick = {() => setViewSyllabus(prevToggle => !prevToggle)} className="h-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Hide Syllabus</button>
                  </div>

          :
          <button onClick = {() => setViewSyllabus(prevToggle => !prevToggle)} className="h-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">View Syllabus</button>}
            </>
            }
          </div>
      }
    </div>
)

}