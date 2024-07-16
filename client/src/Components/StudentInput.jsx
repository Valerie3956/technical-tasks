import React, {useContext} from "react";
import { StudentContext } from "../context/studentContext";
import Form from "./Form";

export default function StudentInput(){



    const {createStudent} = useContext(StudentContext)

    return(
        <div className = "border flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-8">New Student Input</h2>
    <Form
    btnText = "Submit"
    submit = {createStudent}
    />
        </div>
    )
}