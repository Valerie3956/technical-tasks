import { useEffect, useContext } from 'react'
import  axios from 'axios'
import StudentList from './Components/StudentList'
import Form from './Components/Form'
import { StudentContext } from './context/studentContext'

function App() {

  const {createStudent} = useContext(StudentContext)

  return (
    <div className="mx-auto w-[50vw]">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-8">Student Dashboard</h1>
    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-8">New Student Input</h2>
    <Form
    btnText = "Submit"
    submit = {createStudent}
    />
     <StudentList /> 
    </div>
  )
}

export default App
