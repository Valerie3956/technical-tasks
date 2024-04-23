import { useEffect, useContext } from 'react'
import  axios from 'axios'
import StudentList from './Components/StudentList'
import Form from './Components/Form'
import { StudentContext } from './context/studentContext'

function App() {

  const {createStudent} = useContext(StudentContext)

  return (
    <>
    <Form
    btnText = "Submit"
    submit = {createStudent}
    />
     <StudentList /> 
    </>
  )
}

export default App
