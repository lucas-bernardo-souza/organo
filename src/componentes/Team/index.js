import CardEmployee from '../CardEmployee';
import './Team.css';

const  Team = (props) => {
    const cssBackground = {backgroundColor:props.corSecundaria}
    const cssBorder = {borderColor:props.corPrimaria}

    return(
        <section className='team' style={cssBackground}>
            <h3 style={cssBorder}>{props.nome}</h3>
            <div className='employees'>
                {props.employees.map(employee => <CardEmployee nome={employee.nome} cargo={employee.cargo} imagem={employee.imagem}/>)}
            </div>
            
        </section>
        
    )
}

export default Team