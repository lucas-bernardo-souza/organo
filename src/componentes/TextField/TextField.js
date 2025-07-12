 import './TextField.css'

 export const TextField = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.required} placeholder={props.placeholder} />
        </div>
    )
}