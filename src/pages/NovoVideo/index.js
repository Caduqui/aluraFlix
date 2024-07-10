import { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import CardNovoVideo from "../../components/CardNovoVideo";
import Rodape from "../../components/Rodape";
import TituloNovoVideo from "../../components/TituloNovoVideo";
import styles from './NovoVideo.module.css';

function NovoVideo() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then(resposta => resposta.json())
            .then(dados => { setVideos(dados) })
    }, []);
    return (
        <div className={styles.container}>
            <Cabecalho />
            <TituloNovoVideo />
            <CardNovoVideo setVideos={setVideos} />
            <Rodape />
        </div>

    )
}

export default NovoVideo;