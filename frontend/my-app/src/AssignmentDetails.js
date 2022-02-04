
import React from 'react'
import {useEffect,useState} from 'react';
import {useNavigate,useParams} from "react-router-dom"


const AssignmentDetails = (props) =>{
    const{id}=useParams()
    const navigate=useNavigate()
    const [Title,setTitle]=useState('')
    const [Desc,setDesc]=useState('')
 useEffect(()=>{
        getData(id)
 },[])
const getData=async(id)=>{
    const d= await fetch(`http://localhost:4000/teacher/assignment/${id}`)
    const res = await d.json()
    setTitle(res.Title)
    setDesc(res.Desc)
}
const handleSubmit=async(e)=>{
    e.preventDefault()
    const obj={Title,Desc}
    const d= await fetch(`http://localhost:4000/teacher/assignment/${id}` ,{
    method: "PUT",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json"
        }})
    navigate('/assignments', { replace: true });
    }    
    return (
      <div className="container" >  
        <form onSubmit={handleSubmit}> 
        <div className="mb-3">
        <label htmlFor="title" className="form-label">Assignment Title</label>
        <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
        <label htmlFor="desc" className="form-label">Assignment Description</label>
        <input type="text" value={Desc} onChange={(e) => setDesc(e.target.value)} className="form-control"  />
        </div>
        <button type="submit" className="btn btn-sm btn-success">Update</button>
        </form>
   </div>  

    );
  
}
export default AssignmentDetails;
