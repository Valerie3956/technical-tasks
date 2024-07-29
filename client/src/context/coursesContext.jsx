import React, {useState, useEffect} from 'react'
import axios from 'axios'
import dotenv from 'dotenv'
const URL = import.meta.env.VITE_API_URL
// export VITE_API_URL= "https://globalbackend-zued.onrender.com"
console.log(URL)
const CoursesContext = React.createContext()


function CoursesContextProvider(props){

const [coursesList, setCoursesList] = useState([])

//get all courses

useEffect(() => {
    axios.get(`${URL}/courses`)
    .then(res => {setCoursesList(res.data)
        // console.log(res.data)
    })
    .catch(err => console.log(err))
}, [])

//add course

function createCourse(data){
axios.post(`${URL}/courses`, data)
.then(res => setCoursesList(prevList => [...prevList, res.data]))
.catch(err => console.log(err))
}

    return(
        <CoursesContext.Provider
        value = {{
coursesList,
createCourse
        }}
        >
            {props.children}
        </CoursesContext.Provider>
    )
}

export {CoursesContext, CoursesContextProvider}