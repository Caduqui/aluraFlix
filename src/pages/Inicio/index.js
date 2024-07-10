import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Categoria from "../../components/Categoria";
import EditarCard from "../../components/EditarCard";
import styles from './Inicio.module.css';


function Inicio() {
    return (
        <div className={styles.container}>
            <Cabecalho />
            <Banner Categoria={'ACADEMIA'}/> 
            <EditarCard /> 
            <Categoria Categoria={'ACADEMIA'} />
            <Categoria Categoria={'ANIME'} />
            <Categoria Categoria={'JOGOS'}/>
            <Rodape />
        </div>
    )
}

export default Inicio;