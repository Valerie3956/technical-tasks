import React, {useState, useEffect} from 'react'
import axios from 'axios'


const CoursesContext = React.createContext()


function CoursesContextProvider(props){

const [coursesList, setCoursesList] = useState([])

//get all courses

useEffect(() => {
    axios.get("/courses")
    .then(res => {setCoursesList(res.data)
        // console.log(res.data)
    })
    .catch(err => console.log(err))
}, [])

//add course

function createCourse(data){
axios.post("https://globalbackend-zued.onrender.com/courses", data)
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