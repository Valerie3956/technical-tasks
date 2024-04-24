import React, {useState, useEffect} from 'react'
import axios from 'axios'


const StudentContext = React.createContext()

function StudentContextProvider(props){

const [studentsList, setStudentsList] = useState([])

const initState = {
    name : "",
  DOB: "",
  year: 0,
  major: "",
  courses: [],
  isGraduated: false
}

// const [student, setStudent] = useState(initState)

useEffect(() => {
    axios.get('/students')
    .then(res => setStudentsList(res.data))
    .catch(err => console.log(err.response.data.errMsg))
  }, [])

  //delete student

  function deleteStudent(studentId){
    axios.delete(`/students/${studentId}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data.errMsg))
    setStudentsList(prevList => prevList.filter(person => person._id !== studentId))
  }

  //add student

  function createStudent(data){
axios.post('/students', data)
.then(res => {setStudentsList(prevData => [...prevData, res.data])})
.catch(err => console.log(err.response.data.errMsg))
  }


  //edit student

  function editStudent(data, _id){
axios.put(`/students/${_id}`, data)
.then(res => { setStudentsList(prevList => prevList.map(person => person._id !== _id? person : res.data))})
.catch(err => console.log(err.response.data.errMsg))
  }

    return(
        <StudentContext.Provider
        value = {{
studentsList,
deleteStudent,
createStudent,
editStudent
        }}
        >
            {props.children}
        </StudentContext.Provider>
    )
}

export {StudentContext, StudentContextProvider}