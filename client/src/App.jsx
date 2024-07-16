import { useEffect, useContext } from 'react'
import  axios from 'axios'
import StudentList from './Components/StudentList'
import Form from './Components/Form'
import { StudentContext } from './context/studentContext'
import Header from './Components/Header'
import StudentInput from './Components/StudentInput'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import CoursesInput from './Components/CoursesInput'

function App() {

  // const {createStudent} = useContext(StudentContext)

  return (
    <>
    <div className="mx-auto w-[50vw]">
    <Header/>
    <Routes>

<Route path = "/" element = {<Home/>}/>
<Route path = "/input" element = {<StudentInput/>}/>
<Route path = "/list" element = {<StudentList/>}/>
<Route path = "/course/input" element = {<CoursesInput/>}/>

    </Routes>
    </div>
    </>
  )
}

export default App
