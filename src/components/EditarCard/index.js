import { useEffect, useState } from 'react';
import styles from './EditarCard.module.css';
import icone from './iconeFechar.png';


function EditarCard({ isOpen, onClose, video, setVideo }) {

    const [titulo, setTitulo] = useState(video?.titulo || '');
    const [categoria, setCategoria] = useState(video?.categoria || '');
    const [capa, setCapa] = useState(video?.capa || '');
    const [link, setLink] = useState(video?.link || '');

    useEffect(() => {
        if (isOpen && video) {
            setTitulo(video.titulo);
            setCategoria(video.categoria);
            setCapa(video.capa);
            setLink(video.link);
        }
    }, [isOpen, video]);

    const handleSalvar = async () => {
        try {
            const resposta = await fetch(`https://my-json-server.typicode.com/Caduqui/aluraFlix-api/videos/${video.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    titulo,
                    categoria,
                    capa,
                    link,
                }),
            });

            if (resposta.ok) {
                const videoAtualizado = await resposta.json();
                setVideo(videoAtualizado);
                onClose();
            } else {
                console.error('Erro ao atualizar o vídeo');
            }
        } catch (error) {
            console.error('Erro ao fazer a requisição PUT', error);
        }
    };

    const handleLimpar = () => {
        setTitulo('');
        setCategoria('');
        setCapa('');
        setLink('');
    }

    return (
        <>
        {isOpen && (
            <div className={styles.container}>
                <img onClick={onClose} src={icone} alt='icone de fechar janela' />
                <div>
                    <h1>EDITAR CARD:</h1>
                </div>

                <div className={styles.cards}>
                    <div className={styles.compartimento}>
                        <label>Titulo</label>
                        <input value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                    </div>
                    <div className={styles.compartimento}>
                        <label>Categoria</label>
                        <input value={categoria} onChange={(e) => setCategoria(e.target.value)}></input>
                    </div>
                    <div className={styles.compartimento}>
                        <label>Imagem</label>
                        <input value={capa} onChange={(e) => setCapa(e.target.value)}></input>
                    </div>
                    <div className={styles.compartimento}>
                        <label>Video</label>
                        <input value={link} onChange={(e) => setLink(e.target.value)}></input>
                    </div>
                    <div className={styles.botoes}>
                        <button onClick={handleSalvar}><p>SALVAR</p></button>
                        <button onClick={handleLimpar}><p>LIMPAR</p></button>
                    </div>
                </div>
            </div>
            )}
        </>

    )
}

export default EditarCard;