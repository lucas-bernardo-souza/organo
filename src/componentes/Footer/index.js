import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='icones'>
                <img src='/imagens/fb.png' alt='Ícone Facebook'/>
                <img src='/imagens/tw.png' alt='Ícone Twitter'/>
                <img src='/imagens/ig.png' alt='Ícone Instagram'/>
            </div>
            <div className='organo'>
                <img src='/imagens/logo.png' alt='Logo organo'/>
            </div>
            <div className='texto'>
                <p>Desenvolvido por Alura.</p>
            </div>
        </div>
    )
}

export default Footer