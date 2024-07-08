import styles from './Banner.module.css';

function Banner() {
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
                <h1>FRONT END</h1>
                <h2>SERJÃO VOLTOU E SURPREENDEU O BALESTRIN COM O SEU PESO</h2>
                <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
            </div>
            <iframe className={styles.video} width="646" height="343" src="https://www.youtube.com/embed/KPlVwUSi7jY?si=_hViOz6JLBP0cWts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
    )
}

export default Banner;