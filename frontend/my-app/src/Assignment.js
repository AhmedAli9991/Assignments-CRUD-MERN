import React from 'react'
import {useEffect,useState} from 'react';
import {useNavigate} from "react-router-dom"

const Assignment = () =>{
    const[data,setData]=useState([''])
    const navigate = useNavigate();

 useEffect(()=>{
        getData()
 },[])
const getData=async()=>{
    const d= await fetch('http://localhost:4000/teacher/assignments')
    const res = await d.json()
    setData(res)
}
const delData=async(id)=>{
    console.log("Id is "+id)
     await fetch(`http://localhost:4000/teacher/delassignments/${id}`,{ 
         method: 'DELETE' 
         }
         )
         getData();
    }
const up =(id)=>{
    navigate(`/assignment/${id}`, { replace: true });
}    
    return (
      <div style={{color:"#d9534f"}} className="container" >  
        <h1>List of Assignment </h1>            
       <br/>
            {data.map((x)=>{
                
                return (<div>
                    <h3 style={{color:"#f0ad4e"}}>Title of Assignment is: {x.Title}</h3>
                    <p style={{color:"#5cb85c"}}>Description of Assignment is: {x.Desc}</p>
                    
                    <button onClick={()=>{
                        up(x._id)}
                    }>Update</button>
{'        '}
                    <button onClick={()=>{
                        delData(x._id)}
                    }>Delete</button>
                </div>)
            })}
   </div>  

    );
  
}
export default Assignment;
