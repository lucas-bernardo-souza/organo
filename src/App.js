import './App.css'
import Banner from './componentes/Banner/Banner';
import Form from './componentes/Form'
import { useState } from 'react';

function App() {

  const [employees, setEmployees] = useState([])

  const addNewEmployee = (employee) => {
    console.log(employee)
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Form registeredEmployee={employee => addNewEmployee(employee)}/>
    </div>
  );
}

export default App;
