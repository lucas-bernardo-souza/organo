import './CardEmployee.css'

const CardEmployee = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src='https://github.com/lucas-bernardo-souza.png' alt=''></img>
            </div>
            <div className='rodape'>
                <h4>Lucas Bernardo</h4>
                <h5>Desenvolvedor</h5>
            </div>
        </div>
    )
}

export default CardEmployee