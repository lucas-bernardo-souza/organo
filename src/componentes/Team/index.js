import CardEmployee from '../CardEmployee';
import './Team.css';

const  Team = (props) => {
    const cssBackground = {backgroundColor:props.corSecundaria}
    const cssBorder = {borderColor:props.corPrimaria}

    return(
        <section className='team' style={cssBackground}>
            <h3 style={cssBorder}>{props.nome}</h3>
            <CardEmployee/>
        </section>
        
    )
}

export default Team