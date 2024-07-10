import styles from './Banner.module.css';

function Banner({ Categoria }) {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage} style={{
                backgroundImage: `url(https://i.ytimg.com/vi/KPlVwUSi7jY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8TwN-Mp-Dl4ScQecb-MrRmYrXDQ)`,
                backgroundSize: '100% auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: '0.3'
            }}>
            </div>

            <div className={styles.texto}>
                <h1>{Categoria}</h1>
                <h2>SERJÃO VOLTOU E SURPREENDEU O BALESTRIN COM O SEU PESO</h2>
                <p>Mude seu ambiente, faça parte do grupo do Cariani. Acesse o site da Growth, use o cupom CARIANI e aproveite os descontos e ainda ganha CASHBACK! Faça parte da NAÇÃO Renato Cariani e acesse as melhores e mais bonitas roupas para você com desconto Cupom: CARIANI </p>
            </div>
            <iframe className={styles.video} width="646" height="343" src="https://www.youtube.com/embed/KPlVwUSi7jY?si=_hViOz6JLBP0cWts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
    )
}

export default Banner;