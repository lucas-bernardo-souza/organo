import './Form.css'
import TextField from '../TextField'
import List from '../List'
import Button from '../Button'

const Form = () =>{
    const times = [
        'Programação',
        'Front-End',
        'Data-Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const submit = (event) => {
        event.preventDefault()
        console.log("Form submetido")
    }

    return (
        <section className='form'>
            <form onSubmit={submit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField required={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField required={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
                <List required={true} label="Times" itens={times}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form