import React from 'react';
import Nav from './Nav';
import {
  BrowserRouter as Router,
  
  Route,Routes
} from "react-router-dom"

import Addassignment from './Addassignment';
import Assignment from './Assignment';
import AssignmentDetails from './AssignmentDetails';

function App() {
  

  return (
    <React.Fragment>
    <Router>
    <Nav/>
     <Routes>
     <Route exact path="/" element={<Addassignment />}/> 
     <Route exact path="/add-assignment" element={<Addassignment />}/>
     <Route  exact path="/assignments" element={<Assignment />}/>  
     <Route  exact path="/assignment/:id" element={<AssignmentDetails />}/>  
      </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
