import React from 'react'
import {useState} from 'react';

const Addassignment = () =>{
    
    const [Title, setTitle] = useState('');
    const [Desc, setDesc] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      if (Title && Desc) {
        const t = { Title, Desc };
        setTitle('');
        setDesc('');
        fetch('http://localhost:4000/teacher/addassignment',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(t)
      }).then((res)=>{console.log(res)})
    
      
      } else {
        console.log('empty values');
      }
    };//we will use post meathod from here

    return (
      <div>
        
        <form onSubmit={handleSubmit}> 
        <div className="mb-3">
        <label htmlFor="title" className="form-label">Assignment Title</label>
        <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
        </div>
        <div className="mb-3">
        <label htmlFor="desc" className="form-label">Assignment Description</label>
        <input type="text" value={Desc} onChange={(e) => setDesc(e.target.value)} className="form-control"  />
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add Assignnment</button>
        </form>
    

      </div>
    );
  
}
export default Addassignment;
