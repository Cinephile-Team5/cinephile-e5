import styles from './Header.module.css'
import Logo from "../shared/Logo"
import NavBar from "../navigationBar/NavBar"

function HeaderDesktop() {
    return (
        <div className={styles.headerDesktop}>
            <Logo />
            <NavBar />
        </div>
    )
}

export default HeaderDesktop