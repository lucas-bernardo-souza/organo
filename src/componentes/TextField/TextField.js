 import './TextField.css'

 export const TextField = (props) => {

    const typed = (evento) => {
        props.changed(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={typed} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}