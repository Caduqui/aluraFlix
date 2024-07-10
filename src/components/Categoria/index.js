import styles from './Categoria.module.css';
import Cards from '../Cards';
import { useEffect, useState } from 'react';
import { conectaApi } from '../conectaApi';

function Categoria({ Categoria }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then(resposta => resposta.json())
            .then(dados => { setVideos(dados) })
    }, []);

    const removerCard = async (id) => {
       try {
        await conectaApi.deletaCard(id);
        setVideos(videos.filter(card => card.id !== id));
       } catch (error) {
        console.error('Erro ao remover o card:', error);
       }
    };

    const categoriaVideos = videos.filter(video => video.categoria === Categoria);

    const categoriaCor = (categoria) => {
        switch (categoria) {
            case 'ACADEMIA': return 'var(--cor-academia)';
            case 'ANIME': return 'var(--cor-anime)';
            case 'JOGOS': return 'var(--cor-jogos)';
            default: return 'var(--cor-padrao)';
        }
    };

    return (
        <div >
            <div className={styles.categoria} style={{ backgroundColor: categoriaCor(Categoria) }}>
                <h1>{Categoria}</h1>
            </div>
            <div className={styles.container}>
                {categoriaVideos.map(video => (
                    <Cards key={video.id} id={video.id} capa={video.capa} categoria={video.categoria} removerCard={removerCard} video={video} setVideos={setVideos} />
                ))}
            </div>

        </div>
    )
}

export default Categoria;