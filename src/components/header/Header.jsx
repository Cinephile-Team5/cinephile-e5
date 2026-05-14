import styles from './Header.module.css'
import HeaderMobile from './HeaderMobile'
import HeaderDesktop from './HeaderDesktop'

function Header() {
    return (
        <header className={styles.headerContainer}>
            <HeaderMobile />
            <HeaderDesktop />
        </header>
    )
}

export default Header