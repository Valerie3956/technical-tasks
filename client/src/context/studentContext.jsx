import React, {useState, useEffect} from 'react'
import axios from 'axios'
const URL = import.meta.env.VITE_API_URL

const StudentContext = React.createContext()

function StudentContextProvider(props){

const [studentsList, setStudentsList] = useState([])

// const initState = {
//     name : "",
//   DOB: "",
//   enrollementDate : "",
//   year: 0,
//   major: "",
//   courses: [],
//   isGraduated: false
// }

// const [student, setStudent] = useState(initState)

useEffect(() => {
    axios.get(`${URL}/students`)
    .then(res => {setStudentsList(res.data)
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  //delete student

  function deleteStudent(studentId){
    return axios.delete(`${URL}/students/${studentId}`)
    .then(res => {
      setStudentsList(prevList => prevList.filter(person => person._id !== studentId))
      console.log(res.data)
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  //add student

  function createStudent(data){
axios.post(`${URL}/students`, data)
.then(res => {setStudentsList(prevData => [...prevData, res.data])
  console.log(res.data)
})
.catch(err => console.log(err.response.data.errMsg))
  }


  //edit student

  function editStudent(data, _id){
axios.put(`${URL}/students/${_id}`, data)
.then(res => {setStudentsList(prevList => prevList.map(person => person._id !== _id? person : res.data))})
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