import './List.css'

const List = (props) => {
    return(
        <div className='list'>
            <label>{props.label}</label>
            <select onChange={evento => props.changed(evento.target.value)} required={props.required} value={props.value}>
                {props.itens.map((item, index) => <option key={index}>{item}</option>)}
            </select>
        </div>
    )
}

export default List