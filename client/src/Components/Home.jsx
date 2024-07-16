import React from "react";
import { useNavigate } from "react-router-dom";



export default function Home(){

const navigate = useNavigate()

    return(
        <div className = "flex flex-col justify-center items-center my-16">
        <img src = "https://images.unsplash.com/photo-1504817343863-5092a923803e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <div className = "flex flex-row justify-between w-1/2 my-8">
    <button onClick = {() => navigate("/input")} className="h-1/2 items-center self-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">New Student Entry</button>
        <button onClick = {() => navigate("/list")} className="h-1/2 items-center self-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Student List</button>
        </div>
        </div>
    )
}