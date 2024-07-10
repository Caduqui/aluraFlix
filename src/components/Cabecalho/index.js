import styles from './Cabecalho.module.css';
import MenuLink from '../CabecalhoLink'

function Cabecalho() {

    return (
        <div className={styles.container}>
            <img src='./imagens/logo.png' alt="logo da aluraflix" />
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    HOME
                </MenuLink>
                <MenuLink to="/novoVideo">
                    NOVO VÍDEO
                </MenuLink>
            </nav>
        </div>
    )
}

export default Cabecalho;