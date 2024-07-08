import styles from './Botao.module.css';

function Botao() {
    return (
        <div className={styles.botao}>
            <div className={styles.bordaBotao}>
                <a className={styles.home}><p>SALVAR</p></a>
            </div>
            <div className={styles.bordaBotao}>
                <a><p>LIMPAR</p></a>
            </div>
        </div>
    )
}

export default Botao;