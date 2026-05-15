import { useLocation } from "react-router-dom"
import styles from "./Footer.module.css"
import NavBar from "../navigationBar/NavBar"
import FooterWebMap from "./FooterWebMap"

function Footer() {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <footer>
             <div className={`${isHome ? 'block' : 'hidden'} md:block`}>
                <FooterWebMap />
            </div>
            <div className={styles.footerNavBar}>
                <NavBar />
            </div>
        </footer>
    )
}

export default Footer