import { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import CardNovoVideo from "../../components/CardNovoVideo";
import Rodape from "../../components/Rodape";
import TituloNovoVideo from "../../components/TituloNovoVideo";

function NovoVideo() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Caduqui/aluraFlix-api/videos')
            .then(resposta => resposta.json())
            .then(dados => { setVideos(dados) })
    }, []);
    return (
        <>
            <Cabecalho />
            <TituloNovoVideo />
            <CardNovoVideo setVideos={setVideos} />
            <Rodape />
        </>

    )
}

export default NovoVideo;