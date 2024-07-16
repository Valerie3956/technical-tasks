import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header(){

const navigate = useNavigate()


    return(
        <div className = "flex flex-row justify-between my-4">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-8">Student Dashboard</h1>
          <div className = "flex flex-row justify-around w-2/3">
          <button onClick = {() => navigate("/")} className="h-1/2 items-center self-center rounded-md bg-indigo-600 mx-3 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Home</button>
        <button onClick = {() => navigate("/input")} className="h-1/2 items-center self-center rounded-md bg-indigo-600 mx-3 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">New Student Entry</button>
        <button onClick = {() => navigate("/list")} className="h-1/2 items-center self-center rounded-md bg-indigo-600 mx-3 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Student List</button>
        <button onClick = {() => navigate("/course/input")} className="h-1/2 items-center self-center rounded-md bg-indigo-600 mx-3 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Courses Input</button>
          </div>
        </div>
    )
}