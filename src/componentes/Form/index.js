import {useState} from 'react'
import './Form.css'
import TextField from '../TextField'
import List from '../List'
import Button from '../Button'

const Form = (props) =>{

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const submit = (event) => {
        event.preventDefault()
        props.registeredEmployee({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
    }

    return (
        <section className='form'>
            <form onSubmit={submit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={nome}
                    changed={value => setNome(value)}
                />
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={cargo}
                    changed={value => setCargo(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    changed={value => setImagem(value)}    
                />
                <List 
                    required={true} 
                    label="Times" itens={props.teams}
                    value={time}
                    changed={value => setTime(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form