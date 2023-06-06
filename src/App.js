import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [role, setRole] = useState('dev');
  const [employees , setEmployees] = useState(
    [
      {
     
        name:"Tau",
        role: "Developer",
        img : "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
   
        name:"Jeffy",
        role: "Driver",
        img : "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
       
        name:"Kudzanai",
        role: "Supervisor",
        img : "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
      
        name:"Jotham",
        role: "Handyman",
        img : "https://images.pexels.com/photos/2906635/pexels-photo-2906635.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        
        name:"Khallese",
        role: "Actor",
        img : "https://images.pexels.com/photos/1994818/pexels-photo-1994818.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        
        name:"Tom",
        role: "Mface wangu",
        img : "https://images.pexels.com/photos/989200/pexels-photo-989200.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name:"Getty",
        role: "FE",
        img : "https://images.pexels.com/photos/3058391/pexels-photo-3058391.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name:"Zoom",
        role: "Meger",
        img : "https://images.pexels.com/photos/2100697/pexels-photo-2100697.jpeg?auto=compress&cs=tinysrgb&w=600",
      },

  
  ]
  );
  const showEmployees = true;
  return (
    <div className="App ">
    {showEmployees ? (
      <>
        <input 
          type='text' 
          onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
            
    }}
     />
      <div className='flex flex-wrap justify-center ' >
        {employees.map((employee)=> {
          console.log(employee);   
          console.log(uuidv4())
          return (
            <Employee 
              key = {uuidv4()}
              name = {employee.name} 
              role ={employee.role} 
              img = {employee.img} 
          />
          );

             
        }) }     
      </div>        
    </>
    ) : (
      <p>You can not see the employees</p>
    )}   
    </div>
  );
}

export default App;
