import { Link, useLocation } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';

export default function CabecalhoLink({ children, to }) {
    const localizacao = useLocation();

    return (
        <Link className={`
            ${styles.link} 
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
        `} to={to}>
            {children}
        </Link>
    )
}