import styles from './HeaderT.module.css'
import { NavLink } from 'react-router-dom'
import eyeHorus from '../assets/eye-horus.png'

function HeaderT(){
    const linkClass = ({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink

    return(
        <>
        <header className={styles.header}>
            <div className={styles.title}>
                <h2>
                    <NavLink to="/" className={styles.brand}>
                        <img className={styles.brandIcon} src={eyeHorus} alt="" aria-hidden="true" />
                        <span>Kemet</span>
                    </NavLink>
                </h2>
            </div>
            <nav className={styles.list} aria-label="Navegacao principal">
                <ul>
                    <li><NavLink to="/astrologia" className={linkClass}>Astrologia</NavLink></li>
                    <li><NavLink to="/kaballah" className={linkClass}>Kaballah</NavLink></li>
                    <li><NavLink to="/liber-resh" className={linkClass}>Liber Resh</NavLink></li>
                    <li><NavLink to="/tarot" className={linkClass}>Tarot</NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default HeaderT
