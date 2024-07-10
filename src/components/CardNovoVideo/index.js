import { useState } from 'react';
import styles from './CardNovoVideo.module.css';
import { useNavigate } from 'react-router-dom';
import { conectaApi } from '../conectaApi';

function CardNovoVideo({ setVideos }) {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [capa, setCapa] = useState("");
    const [link, setLink] = useState("");
    const navegacao = useNavigate();

    const handleSubmit = async (evento) => {
        evento.preventDefault();

        try {
            const novoVideo = await conectaApi.criaCard(titulo, capa, link, categoria);
            setVideos((prevVideos) => [...prevVideos, novoVideo]);
            setTitulo('');
            setCategoria('');
            setCapa('');
            setLink('');
            navegacao('/');
        } catch (error) {
            console.error('Erro ao fazer a requsição POST', error);
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
            <div className={styles.container}>
                <h2>Criar Card</h2>
                <div className={styles.textos}>
                    <form className={styles.formularioContainer}>
                        <div className={styles.formulario}>
                            <h3>Titulo</h3>
                            <input required placeholder='insira o título' value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                        </div>
                        <div className={styles.formulario}>
                            <h3>Categoria</h3>
                            <select required value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                <option value="">Selecione uma categoria</option>
                                <option value="ACADEMIA">ACADEMIA</option>
                                <option value="ANIME">ANIME</option>
                                <option value="JOGOS">JOGOS</option>
                            </select>
                        </div>
                        <div className={styles.formulario}>
                            <h3>Imagem</h3>
                            <input required placeholder='digite o link da imagem' value={capa} onChange={(e) => setCapa(e.target.value)}></input>
                        </div>
                        <div className={styles.formulario}>
                            <h3>Video</h3>
                            <input required placeholder='digite o link do vídeo' value={link} onChange={(e) => setLink(e.target.value)}></input>
                        </div>
                    </form>
                </div>
                <div className={styles.botoes}>
                    <button onClick={handleSubmit} type='submit'>CRIAR</button>
                    <button onClick={handleLimpar}>LIMPAR</button>
                </div>

            </div>

        </>


    )
}

export default CardNovoVideo;