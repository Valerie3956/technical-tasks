import React, {useState, useContext} from "react"
import Form from "./Form"
import { StudentContext } from "../context/studentContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'

export default function Student(props){

    const [toggle, setToggle] = useState(false)
    const [viewStudent, setViewStudent] = useState(false)
    const { deleteStudent, editStudent } = useContext(StudentContext)
    const{name, DOB, year, major, courses, isGraduated, _id, enrollementDate} = props

async function removeStudent(id){
  try{
    await deleteStudent(id)
    setViewStudent(false)
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
            <Form
            btnText = "Edit"
            toggle = {() => setToggle(prevToggle => !prevToggle)}
            _id = {_id}
            submit = {editStudent}
            name = {name}
            DOB = {DOB.slice(0,10)}
            enrollementDate = {enrollementDate.slice(0, 10)}
            year = {year}
            major = {major}
            courses = {courses}
            isGraduated = {isGraduated}
            /> 
            <div className="mt-6 flex items-center justify-end gap-x-6">
            <button onClick = {() => setToggle(prevToggle => !prevToggle)} className="text-sm font-semibold leading-6 text-gray-900">Close</button>
            <button onClick = {() => removeStudent(props._id)} className="text-sm font-semibold leading-6 text-gray-900"><FontAwesomeIcon icon={faTrash} /></button>
            </div>
            </>
            {/* // end of student form */}
            </div>
      </div>
            :
            // <button onClick = {() => setToggle(prevToggle => !prevToggle)} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Edit Student</button>
      <div className=" justify-between items-center">
        {/* <dl className="divide-y divide-gray-100"> */}
          <div className="px-4 py-3 sm:grid sm:grid-cols-10 sm:gap-4 sm:px-0">
            {/* <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt> */}
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-8 sm:mt-0">{name}{isGraduated && " - Graduated"}</dd>
            {
              viewStudent?
              <>
              <button onClick = {() => setToggle(prevToggle => !prevToggle)} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><FontAwesomeIcon icon={faPenToSquare} /></button>
              <button onClick = {() => setViewStudent(prevToggle => !prevToggle)} className="h-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><FontAwesomeIcon icon={faEyeSlash} /></button>

              </>
              :
              <button onClick = {() => setViewStudent(prevToggle => !prevToggle)} className="h-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><FontAwesomeIcon icon={faEye} /></button>
            }
          </div>
          {/* additional student information */}
          {viewStudent && <>
          <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Date Of Birth</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{DOB.slice(0,10)}</dd>
          </div>
          <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Year</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{year}</dd>
          </div>
          <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Major</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{major}</dd>
          </div>
          <div className="px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            {courses.length > 0 && 
            <>
            <dt className="text-sm font-medium leading-6 text-gray-900">Courses</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" >
              {courses.map(course => {
                return <li className="flex items-center justify-between pr-5 text-sm leading-6" key = {course.course._id}>{course.course.name}</li>
              })}
              </ul>
              </dd>
            </>
            }
            </div>
            </>
            }
          </div>

          }

        </div>
    )
}