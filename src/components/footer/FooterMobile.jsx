import { useLocation } from "react-router-dom"
import styles from "./Footer.module.css"
import NavBar from "../navigationBar/NavBar"
import FooterWebMap from "./FooterWebMap"

function FooterMobile() {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <footer className="flex flex-col flex-wrap justify-center text-center md:flex-row" >
            {isHome && <FooterWebMap />}
            <div className={styles.footerNavBar}>
                <NavBar />
            </div>
        </footer>
    )
}

export default FooterMobile