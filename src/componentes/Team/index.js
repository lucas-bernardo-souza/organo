import CardEmployee from '../CardEmployee';
import './Team.css';

const  Team = (props) => {
    const cssBackground = {backgroundColor:props.corSecundaria}
    const cssBorder = {borderColor:props.corPrimaria}

    return(
        /* 
            Renderização condicional
            Se a operação booleana for true, retorna o componente a direita do operador 
        */
        props.employees.length > 0 && <section className='team' style={cssBackground}>
            <h3 style={cssBorder}>{props.nome}</h3>
            <div className='employees'>
                {props.employees.map(employee => <CardEmployee nome={employee.nome} cargo={employee.cargo} imagem={employee.imagem}/>)}
            </div>
        </section>
        
    )
}

export default Team