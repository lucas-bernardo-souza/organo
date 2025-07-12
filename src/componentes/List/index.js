import './List.css'

const List = (props) => {
    return(
        <div className='list'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map((item, index) => <option key={index}>{item}</option>)}
            </select>
        </div>
    )
}

export default List