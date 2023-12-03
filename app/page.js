"use client";
import React, { useState } from "react";

const page = () => {
  const [task, settask] = useState("");
  const [taskArray, settaskArray] = useState([])

  let updateArray=(e)=>{
    e.preventDefault()
    settaskArray([...taskArray,task])
    settask('')
  }

  let deleteTask=(i)=>{
    let newArray=[...taskArray]
    newArray.splice(i,1)
    settaskArray(newArray)
  }

  return (
    <>
      <div className="text-white bg-black text-3xl text-center p-3">
        My To Do List
      </div>

      <div className="container text-center">
        <form onSubmit={(e)=>{updateArray(e)}}>
          <input
            onChange={(e) => {
              settask(e.target.value)
            }}
            type="text"
            className="mt-10 border p-3 rounded-lg"
            placeholder="enter task here"
            value={task}
          />
          <button className="m-3 bg-black text-white p-3 rounded-lg">
            ADD
          </button>
        </form>
      </div>

      <div className="text-center">
        <div className="m-7 p-7 bg-slate-300">
          {
            taskArray && taskArray.map((taskEl,index)=>
              (
                <ul key={index} className="bg-slate-500 p-5 m-3">
                  <li>{taskEl} <button onClick={()=>{deleteTask(index)}} className="bg-red-800 px-4 py-1 rounded-lg ml-8"> Delete</button></li>
                </ul>
              )
            )
          }
        </div>
      </div>

    </>
  );
};

export default page;
