import styles from './Cards.module.css';
import { CiEdit } from "react-icons/ci";
import { TbTrashX } from "react-icons/tb";
import EditarCard from '../EditarCard';
import { useState } from 'react';
import { conectaApi } from '../conectaApi';

function Cards({ id, capa, categoria, removerCard, video, setVideos }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const abrirModal = () => {
        setIsModalOpen(true);
    }

    const fecharModal = () => {
        setIsModalOpen(false);
    }

    const bordaCor = (categoria) => {
        switch (categoria) {
            case 'ACADEMIA':
                return 'var(--cor-academia)';
            case 'ANIME':
                return 'var(--cor-anime)';
            case 'JOGOS':
                return 'var(--cor-jogos)';
            default:
                return 'var(--cor-padrao)';
        }
    };

    const aoDeletar = (id) => {
        try {
            conectaApi.deletaCard(id);
            console.log('Card excluído com sucesso');
            removerCard(id);
        } catch (error) {
            console.error('Erro ao fazer a requisição DELETE', error);
        }
    }

    const handleVideoAtualizado = (videoAtualizado) => {
        setVideos((prevVideos) =>
            prevVideos.map((v) => (v.id === videoAtualizado.id ? videoAtualizado : v))
        )
    }

    return (
        <>
            <div className={styles.card} style={{ border: `4px solid ${bordaCor(categoria)}` }}>
                <img src={capa} />
                <div className={styles.descricao} style={{ borderWidth: '5px 0px 0px 0px', borderStyle: 'solid', borderColor: `${bordaCor(categoria)}` }}>
                    <div className={styles.descricaoParagrafo} onClick={() => aoDeletar(id)}>
                        <TbTrashX className={styles.imagem} />
                        <p>DELETAR</p>
                    </div>
                    <div className={styles.descricaoParagrafo}>
                        <CiEdit className={styles.imagem} />
                        <p onClick={abrirModal}>EDITAR</p>
                    </div>
                </div>
            </div>
            <EditarCard isOpen={isModalOpen} onClose={fecharModal} video={video} setVideo={handleVideoAtualizado} />
        </>

    )
}

export default Cards;