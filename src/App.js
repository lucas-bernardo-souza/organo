import './App.css'
import Banner from './componentes/Banner/Banner';
import Form from './componentes/Form'
import { useState } from 'react';
import Team from './componentes/Team';

function App() {

  const teams = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [employees, setEmployees] = useState([])

  const addNewEmployee = (employee) => {
    console.log(employee)
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Form teams={teams.map(team => team.nome)} registeredEmployee={employee => addNewEmployee(employee)}/>
      {teams.map(team => <Team 
        key={team.nome} 
        nome={team.nome} 
        corPrimaria={team.corPrimaria} 
        corSecundaria={team.corSecundaria}
        employees={employees.filter(employe => employe.time === team.nome)}
      />)}
    </div>
  );
}

export default App;
