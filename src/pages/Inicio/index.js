import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Categoria from "../../components/Categoria";
import EditarCard from "../../components/EditarCard";


function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner /> 
            <EditarCard /> 
            <Categoria Categoria={'ACADEMIA'} />
            <Categoria Categoria={'ANIME'} />
            <Categoria Categoria={'JOGOS'}/>
            <Rodape />
        </>
    )
}

export default Inicio;